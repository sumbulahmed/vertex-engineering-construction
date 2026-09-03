import { useState, useRef, useCallback, useEffect, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Carousel.css';

/**
 * Custom Carousel — replaces react-owl-carousel
 * Props:
 *   items          – number of visible items (default 1)
 *   itemsTablet    – items at ≤1024px
 *   itemsMobile    – items at ≤640px
 *   gap            – gap between items in px (default 24)
 *   autoplay       – ms between auto-advances (0 = off)
 *   dots           – show dot indicators
 *   className      – extra class on wrapper
 *   children       – slides
 */
export default function Carousel({
  items = 3,
  itemsTablet = 2,
  itemsMobile = 1,
  gap = 24,
  autoplay = 0,
  dots = true,
  className = '',
  children,
  carouselRef,        // forwarded ref exposing .next() / .prev()
}) {
  const slides = Children.toArray(children);
  const total = slides.length;

  const [current, setCurrent] = useState(0);
  const [visibleItems, setVisibleItems] = useState(items);
  const autoplayRef = useRef(null);
  const trackRef = useRef(null);

  // Responsive visible items
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w <= 640) setVisibleItems(itemsMobile);
      else if (w <= 1024) setVisibleItems(itemsTablet);
      else setVisibleItems(items);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [items, itemsTablet, itemsMobile]);

  const maxIndex = Math.max(0, total - visibleItems);

  const next = useCallback(() => {
    setCurrent(c => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent(c => (c <= 0 ? maxIndex : c - 1));
  }, [maxIndex]);

  // Expose next/prev via ref
  useEffect(() => {
    if (carouselRef) {
      carouselRef.current = { next, prev };
    }
  }, [carouselRef, next, prev]);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    autoplayRef.current = setInterval(next, autoplay);
    return () => clearInterval(autoplayRef.current);
  }, [autoplay, next]);

  // Touch/swipe support
  const touchStartX = useRef(null);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  // Calculate item width as percentage
  const itemWidthPct = 100 / visibleItems;
  const gapTotal = gap * (visibleItems - 1);
  const translateX = current * (itemWidthPct + (gap / (trackRef.current?.offsetWidth || 1000)) * 100);

  return (
    <div className={`carousel ${className}`}>
      <div
        className="carousel__viewport"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="carousel__track"
          style={{
            display: 'flex',
            gap: `${gap}px`,
            transform: `translateX(calc(-${current * (100 / visibleItems)}% - ${current * gap / visibleItems}px))`,
            transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="carousel__slide"
              style={{
                flex: `0 0 calc(${100 / visibleItems}% - ${gap * (visibleItems - 1) / visibleItems}px)`,
                minWidth: 0,
              }}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {dots && total > visibleItems && (
        <div className="carousel__dots" role="group" aria-label="Carousel navigation dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`carousel__dot${current === i ? ' carousel__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={current === i}
            />
          ))}
        </div>
      )}
    </div>
  );
}

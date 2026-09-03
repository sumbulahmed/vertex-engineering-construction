import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Carousel from '../ui/Carousel';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

export default function Testimonials() {
  const carouselRef = useRef(null);

  return (
    <section className="testimonials section" aria-labelledby="testimonials-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header-row">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Client Feedback</span>
            <h2 id="testimonials-heading" className="heading-xl testimonials__heading">
              What Clients Say
            </h2>
          </motion.div>

          <div className="carousel-nav">
            <button
              className="carousel-nav-btn"
              onClick={() => carouselRef.current?.prev()}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="carousel-nav-btn"
              onClick={() => carouselRef.current?.next()}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <Carousel
            items={2}
            itemsTablet={2}
            itemsMobile={1}
            gap={32}
            autoplay={6000}
            dots={true}
            carouselRef={carouselRef}
          >
            {testimonials.map(t => (
              <div key={t.id} className="testimonial-card">
                <Quote className="testimonial-card__icon" size={28} aria-hidden="true" />
                <blockquote className="testimonial-card__quote">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__author-line" aria-hidden="true" />
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__meta">
                      {t.role} · {t.organisation}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

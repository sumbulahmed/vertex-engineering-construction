import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../../data/services';
import './ServicesSection.css';

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="services-section section" aria-labelledby="services-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header-row">
          <div>
            <span className="section-label">What We Do</span>
            <h2 id="services-heading" className="heading-xl services-section__heading">
              Our Services
            </h2>
          </div>
          <Link to="/services" className="btn btn-ghost">
            All Services <ArrowRight size={16} />
          </Link>
        </div>

        {/* Desktop layout */}
        <div className="services-section__layout">
          {/* Service list */}
          <nav className="services-section__list" aria-label="Service selector">
            {services.map((s, i) => (
              <button
                key={s.id}
                className={`services-section__item${active === i ? ' services-section__item--active' : ''}`}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
              >
                <span className="services-section__item-num">{s.number}</span>
                <span className="services-section__item-title">{s.title}</span>
                <span className="services-section__item-arrow">
                  <ArrowRight size={14} />
                </span>
              </button>
            ))}
          </nav>

          {/* Service detail */}
          <div className="services-section__detail" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                className="services-section__detail-inner"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Image */}
                <div className="services-section__image-wrap">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current.image}
                      src={current.image}
                      alt={current.title}
                      className="services-section__image"
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      loading="lazy"
                    />
                  </AnimatePresence>
                  <div className="services-section__image-overlay" aria-hidden="true" />
                  <div className="services-section__image-num" aria-hidden="true">
                    {current.number}
                  </div>
                </div>

                {/* Text */}
                <div className="services-section__text">
                  <h3 className="heading-md services-section__service-title">
                    {current.title}
                  </h3>
                  <p className="body-base services-section__service-desc">
                    {current.description}
                  </p>
                  <ul className="services-section__scope">
                    {current.scope.slice(0, 4).map((item, i) => (
                      <li key={i} className="services-section__scope-item">
                        <span className="services-section__scope-dot" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services" className="btn btn-primary services-section__cta">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile accordion */}
        <div className="services-section__mobile">
          {services.map((s, i) => (
            <div key={s.id} className="services-mobile__item">
              <button
                className={`services-mobile__trigger${active === i ? ' services-mobile__trigger--active' : ''}`}
                onClick={() => setActive(active === i ? -1 : i)}
                aria-expanded={active === i}
              >
                <span className="services-mobile__num">{s.number}</span>
                <span className="services-mobile__title">{s.title}</span>
                <span className="services-mobile__icon" aria-hidden="true">
                  {active === i ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    className="services-mobile__body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="services-mobile__body-inner">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="services-mobile__image"
                        loading="lazy"
                      />
                      <p className="body-base">{s.shortDescription}</p>
                      <Link to="/services" className="btn btn-ghost">
                        More info <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

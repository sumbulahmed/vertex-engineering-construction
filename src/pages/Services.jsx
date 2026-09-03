import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import FinalCTA from '../components/sections/FinalCTA';
import './Services.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Services() {
  return (
    <main className="services-page">
      {/* Hero */}
      <section className="page-hero services-hero">
        <div className="page-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80"
            alt="Construction services overview"
            className="page-hero__img"
          />
          <div className="page-hero__overlay" aria-hidden="true" />
        </div>
        <div className="container page-hero__content">
          <motion.span className="eyebrow" {...fadeUp(0.2)}>Services</motion.span>
          <motion.h1 className="heading-display page-hero__heading" {...fadeUp(0.35)}>
            What We Deliver
          </motion.h1>
          <motion.p className="page-hero__sub" {...fadeUp(0.5)}>
            From general construction to specialist infrastructure, Vertex delivers across all major sectors.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="section services-intro">
        <div className="container">
          <div className="services-intro__grid">
            <motion.div {...fadeUp()}>
              <span className="section-label">Our Capability</span>
              <h2 className="heading-xl services-intro__heading">
                Full-Service<br />Construction Delivery
              </h2>
            </motion.div>
            <motion.p className="body-lg services-intro__desc" {...fadeUp(0.15)}>
              Vertex provides end-to-end construction services across eight disciplines — from initial planning and substructure through to fit-out, commissioning and handover. Whether you need a full construction contract or specialist project management, we have the capability to deliver.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services list — alternating editorial layout */}
      <section className="section-sm services-list">
        <div className="container">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className={`service-block${i % 2 !== 0 ? ' service-block--reversed' : ''}`}
              {...fadeUp(0.1)}
            >
              <div className="service-block__image-wrap">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-block__image"
                  loading="lazy"
                />
                <div className="service-block__image-num" aria-hidden="true">{service.number}</div>
              </div>
              <div className="service-block__content">
                <span className="service-block__num">{service.number}</span>
                <h2 className="heading-md service-block__title">{service.title}</h2>
                <p className="body-base service-block__desc">{service.description}</p>
                <ul className="service-block__scope" aria-label={`Scope of ${service.title}`}>
                  {service.scope.map((item, j) => (
                    <li key={j} className="service-block__scope-item">
                      <span className="service-block__scope-dot" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary service-block__cta">
                  Enquire <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}

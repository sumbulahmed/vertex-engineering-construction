import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FinalCTA from '../components/sections/FinalCTA';
import './About.css';

const values = [
  { num: '01', title: 'Quality First', desc: 'We refuse to compromise on construction quality. Every material, every joint, every system is specified and installed to the highest standard.' },
  { num: '02', title: 'Technical Precision', desc: 'Our engineering team brings exact technical knowledge to every project — structural, civil, MEP and beyond.' },
  { num: '03', title: 'Full Accountability', desc: 'We take complete ownership of our projects. Programme, cost, quality and safety — the responsibility rests with us.' },
  { num: '04', title: 'Partnership Approach', desc: 'We work as a partner to our clients — sharing information, solving problems and building long-term relationships.' },
];

const capabilities = [
  'General Construction', 'Commercial Construction', 'Residential Development',
  'Government & Institutional', 'Infrastructure Development', 'Industrial Construction',
  'Renovation & Rehabilitation', 'Project Management',
];

const sectors = [
  { label: 'Government', desc: 'Federal and provincial public buildings, civic and administrative facilities.' },
  { label: 'Commercial', desc: 'Office towers, commercial parks, mixed-use and retail developments.' },
  { label: 'Residential', desc: 'Apartments, villas, townhouses and large-scale residential communities.' },
  { label: 'Industrial', desc: 'Warehouses, factories, logistics centres and industrial parks.' },
  { label: 'Institutional', desc: 'Education, healthcare support, research and community facilities.' },
  { label: 'Infrastructure', desc: 'Roads, bridges, flyovers, drainage and utility networks.' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function About() {
  return (
    <main className="about-page">
      {/* Page Hero */}
      <section className="page-hero about-hero">
        <div className="page-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1800&q=80"
            alt="Vertex Engineering construction site overview"
            className="page-hero__img"
          />
          <div className="page-hero__overlay" aria-hidden="true" />
        </div>
        <div className="container page-hero__content">
          <motion.span className="eyebrow" {...fadeUp(0.2)}>
            About Vertex
          </motion.span>
          <motion.h1 className="heading-display page-hero__heading" {...fadeUp(0.35)}>
            Who We Are
          </motion.h1>
          <motion.p className="page-hero__sub" {...fadeUp(0.5)}>
            A full-service construction and development company with over two decades of delivery across Pakistan.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section about-intro">
        <div className="container">
          <div className="about-intro__grid">
            <motion.div {...fadeUp()}>
              <span className="section-label">Our Story</span>
              <h2 className="heading-xl about-intro__heading">
                Built on Experience.<br />Driven by Precision.
              </h2>
            </motion.div>
            <motion.div className="about-intro__body" {...fadeUp(0.15)}>
              <p className="body-lg">
                Vertex Engineering &amp; Construction was established with a clear purpose — to build structures and spaces that serve communities, drive commerce and endure time.
              </p>
              <p className="body-base" style={{ marginTop: 'var(--space-4)' }}>
                Over more than two decades, we have grown from a regional contractor into a full-service construction and development company operating across all major sectors. Our work spans government buildings, commercial towers, residential communities, industrial facilities and civil infrastructure — each project delivered with the same commitment to quality, programme discipline and client partnership.
              </p>
              <p className="body-base" style={{ marginTop: 'var(--space-4)' }}>
                Today, Vertex is recognised as one of Pakistan's reliable construction delivery partners — trusted by government bodies, private developers, institutional clients and corporate organisations to build what matters.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="about-image-strip">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80" alt="Vertex construction site" loading="lazy" />
        <img src="https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=900&q=80" alt="Construction progress" loading="lazy" />
        <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80" alt="Completed commercial project" loading="lazy" />
      </div>

      {/* Values */}
      <section className="section about-values">
        <div className="container">
          <motion.div className="about-values__header" {...fadeUp()}>
            <span className="section-label">What We Stand For</span>
            <h2 className="heading-xl">Our Values</h2>
          </motion.div>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <motion.div key={v.num} className="about-value-card" {...fadeUp(i * 0.1)}>
                <span className="about-value-card__num">{v.num}</span>
                <h3 className="about-value-card__title">{v.title}</h3>
                <p className="about-value-card__desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-sm about-capabilities">
        <div className="container">
          <div className="about-cap__grid">
            <motion.div className="about-cap__image-wrap" {...fadeUp()}>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80"
                alt="Construction team on site"
                className="about-cap__image"
                loading="lazy"
              />
            </motion.div>
            <div className="about-cap__content">
              <motion.div {...fadeUp(0.1)}>
                <span className="section-label">What We Build</span>
                <h2 className="heading-xl about-cap__heading">Construction Capabilities</h2>
              </motion.div>
              <ul className="about-cap__list">
                {capabilities.map((c, i) => (
                  <motion.li key={c} className="about-cap__item" {...fadeUp(0.1 + i * 0.07)}>
                    <span className="about-cap__item-dot" aria-hidden="true" />
                    {c}
                  </motion.li>
                ))}
              </ul>
              <motion.div {...fadeUp(0.5)}>
                <Link to="/services" className="btn btn-primary">
                  All Services <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section about-sectors">
        <div className="container">
          <motion.div className="about-sectors__header" {...fadeUp()}>
            <span className="section-label">Where We Work</span>
            <h2 className="heading-xl">Sectors</h2>
          </motion.div>
          <div className="about-sectors__grid">
            {sectors.map((s, i) => (
              <motion.div key={s.label} className="about-sector-item" {...fadeUp(i * 0.08)}>
                <h3 className="about-sector-item__label">{s.label}</h3>
                <p className="about-sector-item__desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}

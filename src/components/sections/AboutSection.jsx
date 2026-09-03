import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './AboutSection.css';

const principles = [
  { num: '01', label: 'Quality', desc: 'Uncompromising standards on every project we deliver.' },
  { num: '02', label: 'Precision', desc: 'Technical accuracy from planning through to handover.' },
  { num: '03', label: 'Accountability', desc: 'Full ownership of programme, cost and quality outcomes.' },
];

const inView = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export default function AboutSection() {
  return (
    <section className="about-section section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-section__grid">

          {/* Image */}
          <motion.div
            className="about-section__image-wrap"
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1000&q=80"
              alt="Construction team reviewing structural drawings on an active building site"
              className="about-section__image"
              loading="lazy"
            />
            <div className="about-section__image-badge">
              <span className="about-section__badge-num">20+</span>
              <span className="about-section__badge-label">Years of Construction Excellence</span>
            </div>
          </motion.div>

          {/* Text */}
          <div className="about-section__body">
            <motion.span className="section-label" {...inView}>
              About Vertex
            </motion.span>

            <motion.h2
              id="about-heading"
              className="heading-xl about-section__heading"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Built on Experience.<br />
              Driven by Precision.
            </motion.h2>

            <motion.p
              className="body-lg about-section__desc"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Vertex Engineering &amp; Construction is a full-service construction and development company with over two decades of project delivery across Pakistan. We build with purpose — combining technical depth, disciplined management and a commitment to quality that defines every project.
            </motion.p>

            {/* Principles */}
            <div className="about-section__principles">
              {principles.map((p, i) => (
                <motion.div
                  key={p.num}
                  className="about-section__principle"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="about-section__principle-num">{p.num}</span>
                  <div>
                    <div className="about-section__principle-label">{p.label}</div>
                    <div className="about-section__principle-desc">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/about" className="btn btn-primary">
                Our Story <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

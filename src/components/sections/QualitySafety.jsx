import { motion } from 'framer-motion';
import './QualitySafety.css';

const points = [
  'Quality Assurance — ISO-aligned QA/QC processes at every stage',
  'Health & Safety — Zero-harm culture enforced across all sites',
  'Engineering Standards — Full compliance with national and international standards',
  'Site Management — Structured site control, daily reporting and supervision',
  'Environmental Responsibility — Responsible practices minimising project impact',
];

export default function QualitySafety() {
  return (
    <section className="quality section" aria-labelledby="quality-heading">
      <div className="container">
        <div className="quality__grid">
          {/* Content */}
          <div className="quality__content">
            <motion.span
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Standards & Safety
            </motion.span>

            <motion.h2
              id="quality-heading"
              className="heading-xl quality__heading"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Built with<br />Discipline.
            </motion.h2>

            <motion.p
              className="body-base quality__desc"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Every Vertex project is underpinned by a disciplined approach to quality, safety and professional standards. We build to last.
            </motion.p>

            <ul className="quality__points" aria-label="Quality and safety commitments">
              {points.map((p, i) => (
                <motion.li
                  key={i}
                  className="quality__point"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.09 }}
                >
                  <span className="quality__point-dot" aria-hidden="true" />
                  <span>{p}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <motion.div
            className="quality__image-wrap"
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=1000&q=80"
              alt="Construction site with safety equipment and structured site management"
              className="quality__image"
              loading="lazy"
            />
            <div className="quality__image-badge">
              <div className="quality__badge-inner">
                <span className="quality__badge-line" aria-hidden="true" />
                <span className="quality__badge-text">Zero-Harm Culture</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

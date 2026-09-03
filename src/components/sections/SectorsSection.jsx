import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './SectorsSection.css';

const sectors = [
  {
    id: 'government',
    label: 'Government & Institutional',
    tag: 'PUBLIC SECTOR',
    description: 'Delivering civic buildings, federal facilities, educational campuses and institutional infrastructure within rigorous public procurement frameworks.',
    link: '/government',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1000&q=80',
    alt: 'Government institutional building complex',
  },
  {
    id: 'private',
    label: 'Private & Commercial',
    tag: 'PRIVATE SECTOR',
    description: 'Building commercial towers, residential developments, industrial facilities and mixed-use projects for private developers and corporate clients.',
    link: '/projects',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1000&q=80',
    alt: 'Modern commercial tower under construction',
  },
];

export default function SectorsSection() {
  return (
    <section className="sectors section-sm" aria-labelledby="sectors-heading">
      <div className="container">
        <motion.div
          className="sectors__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">What We Build</span>
          <h2 id="sectors-heading" className="heading-xl sectors__heading">
            Two Sectors.<br />One Standard.
          </h2>
        </motion.div>

        <div className="sectors__grid">
          {sectors.map((s, i) => (
            <motion.div
              key={s.id}
              className="sector-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={s.link} className="sector-card__inner" aria-label={`Learn more about ${s.label}`}>
                <div className="sector-card__image-wrap">
                  <img
                    src={s.image}
                    alt={s.alt}
                    className="sector-card__image"
                    loading="lazy"
                  />
                  <div className="sector-card__overlay" aria-hidden="true" />
                </div>

                <div className="sector-card__content">
                  <span className="sector-card__tag">{s.tag}</span>
                  <h3 className="sector-card__title">{s.label}</h3>
                  <p className="sector-card__desc">{s.description}</p>
                  <div className="sector-card__arrow">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

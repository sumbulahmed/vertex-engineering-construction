import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './FinalCTA.css';

export default function FinalCTA() {
  return (
    <section className="final-cta" aria-label="Call to action — start a project">
      {/* Background */}
      <motion.div
        className="final-cta__bg"
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1800&q=80"
          alt="Completed architectural building project"
          className="final-cta__image"
          loading="lazy"
        />
        <div className="final-cta__overlay" aria-hidden="true" />
      </motion.div>

      {/* Content */}
      <div className="container final-cta__content">
        <motion.span
          className="eyebrow final-cta__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Start Today
        </motion.span>

        <motion.h2
          className="heading-display final-cta__heading"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Have a Project<br />in Mind?
        </motion.h2>

        <motion.p
          className="final-cta__desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let&apos;s discuss how we can take it from concept to completion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/contact" className="btn btn-accent final-cta__btn">
            Start a Conversation <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero — Vertex Engineering &amp; Construction">
      {/* Background image with scale animation */}
      <motion.div
        className="hero__bg"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=85"
          alt="Large-scale construction site with cranes and concrete structures under development"
          className="hero__img"
          loading="eager"
        />
        <div className="hero__overlay" aria-hidden="true" />
      </motion.div>

      {/* Content */}
      <div className="hero__content container">
        <motion.div {...fadeUp(0.2)} className="hero__eyebrow">
          <span className="eyebrow">Construction · Development · Delivery</span>
        </motion.div>

        <motion.h1 className="hero__heading" {...fadeUp(0.4)}>
          BUILDING<br />
          <span className="hero__heading-accent">WHAT MATTERS.</span>
        </motion.h1>

        <motion.p className="hero__description" {...fadeUp(0.6)}>
          Construction solutions for government, commercial, institutional,<br className="hero__br" />
          residential and private-sector projects — delivered with precision.
        </motion.p>

        <motion.div className="hero__actions" {...fadeUp(0.75)}>
          <Link to="/projects" className="btn btn-accent">
            Explore Projects <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn btn-outline hero__btn-outline">
            Start a Conversation
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} />
          </motion.div>
          <span>Scroll</span>
        </motion.div>
      </div>

      {/* Bottom strip */}
      <div className="hero__strip" aria-hidden="true">
        <div className="container">
          <div className="hero__strip-inner">
            <div className="hero__strip-item">
              <span className="hero__strip-num">20+</span>
              <span className="hero__strip-label">Years Experience</span>
            </div>
            <div className="hero__strip-divider" />
            <div className="hero__strip-item">
              <span className="hero__strip-num">150+</span>
              <span className="hero__strip-label">Projects Delivered</span>
            </div>
            <div className="hero__strip-divider" />
            <div className="hero__strip-item">
              <span className="hero__strip-num">4+</span>
              <span className="hero__strip-label">Major Sectors</span>
            </div>
            <div className="hero__strip-divider" />
            <div className="hero__strip-item">
              <span className="hero__strip-num">40+</span>
              <span className="hero__strip-label">Technical Professionals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

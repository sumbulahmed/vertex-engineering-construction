import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Carousel from '../ui/Carousel';
import { teamMembers } from '../../data/team';
import './TeamSection.css';

export default function TeamSection() {
  const carouselRef = useRef(null);

  return (
    <section className="team-section section" aria-labelledby="team-heading">
      <div className="container">
        <div className="section-header-row">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="section-label">The People</span>
            <h2 id="team-heading" className="heading-xl team-section__heading">Our Team</h2>
          </motion.div>
          <motion.div className="team-section__header-right" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="carousel-nav">
              <button className="carousel-nav-btn" onClick={() => carouselRef.current?.prev()} aria-label="Previous team member"><ChevronLeft size={20} /></button>
              <button className="carousel-nav-btn" onClick={() => carouselRef.current?.next()} aria-label="Next team member"><ChevronRight size={20} /></button>
            </div>
            <Link to="/team" className="btn btn-ghost">Full Team <ArrowRight size={16} /></Link>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}>
          <Carousel items={4} itemsTablet={2} itemsMobile={1} gap={24} autoplay={0} dots={true} carouselRef={carouselRef}>
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-card__image-wrap">
                  <img src={member.image} alt={`${member.name} — ${member.role}`} className="team-card__image" loading="lazy" />
                  <div className="team-card__overlay" aria-hidden="true" />
                </div>
                <div className="team-card__body">
                  <div className="team-card__spec">{member.specialisation}</div>
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

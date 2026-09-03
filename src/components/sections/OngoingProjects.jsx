import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, MapPin } from 'lucide-react';
import Carousel from '../ui/Carousel';
import { ongoingProjects } from '../../data/projects';
import './OngoingProjects.css';

export default function OngoingProjects() {
  const carouselRef = useRef(null);

  return (
    <section className="ongoing section" aria-labelledby="ongoing-heading">
      <div className="container">
        <div className="section-header-row">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="section-label">In Progress</span>
            <h2 id="ongoing-heading" className="heading-xl ongoing__heading">What We Are<br />Building Now.</h2>
          </motion.div>
          <motion.div className="ongoing__header-right" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="carousel-nav">
              <button className="carousel-nav-btn" onClick={() => carouselRef.current?.prev()} aria-label="Previous ongoing project"><ChevronLeft size={20} /></button>
              <button className="carousel-nav-btn" onClick={() => carouselRef.current?.next()} aria-label="Next ongoing project"><ChevronRight size={20} /></button>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7 }}>
          <Carousel items={3} itemsTablet={2} itemsMobile={1} gap={24} autoplay={5500} dots={true} carouselRef={carouselRef}>
            {ongoingProjects.map(project => (
              <div key={project.id} className="ongoing-card">
                <div className="ongoing-card__image-wrap">
                  <img src={project.image} alt={project.name} className="ongoing-card__image" loading="lazy" />
                  <div className="ongoing-card__overlay" aria-hidden="true" />
                  <div className="ongoing-card__badge"><span className="badge badge-ongoing"><span className="badge-dot" aria-hidden="true" />Ongoing</span></div>
                </div>
                <div className="ongoing-card__body">
                  <div className="ongoing-card__meta">
                    <span className="ongoing-card__sector">{project.sector}</span>
                    <span className="ongoing-card__location"><MapPin size={11} />{project.location}</span>
                  </div>
                  <h3 className="ongoing-card__name">{project.name}</h3>
                  <p className="ongoing-card__desc">{project.description}</p>
                  <Link to={`/projects/${project.id}`} className="ongoing-card__cta" aria-label={`View project: ${project.name}`}>View Project <ArrowRight size={13} /></Link>
                </div>
              </div>
            ))}
          </Carousel>
        </motion.div>
        <motion.div className="ongoing__footer" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
          <Link to="/projects" className="btn btn-ghost">View All Ongoing Projects <ArrowRight size={16} /></Link>
        </motion.div>
      </div>
    </section>
  );
}

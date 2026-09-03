import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Carousel from '../ui/Carousel';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import './FeaturedProjects.css';

const filters = ['ALL', 'GOVERNMENT', 'COMMERCIAL', 'RESIDENTIAL', 'INDUSTRIAL', 'INSTITUTIONAL', 'INFRASTRUCTURE'];

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const carouselRef = useRef(null);

  const filtered = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.tag === activeFilter);

  return (
    <section className="featured-projects section" aria-labelledby="featured-heading">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="section-label">Our Work</span>
            <h2 id="featured-heading" className="heading-xl featured-projects__heading">
              Selected Projects
            </h2>
          </div>
          <div className="featured-projects__header-right">
            <div className="carousel-nav" aria-label="Carousel navigation">
              <button className="carousel-nav-btn" onClick={() => carouselRef.current?.prev()} aria-label="Previous project"><ChevronLeft size={20} /></button>
              <button className="carousel-nav-btn" onClick={() => carouselRef.current?.next()} aria-label="Next project"><ChevronRight size={20} /></button>
            </div>
            <Link to="/projects" className="btn btn-ghost">All Projects <ArrowRight size={16} /></Link>
          </div>
        </div>
        <div className="featured-projects__filters" role="group" aria-label="Project filters">
          {filters.map(f => (
            <button key={f} className={`featured-projects__filter${activeFilter === f ? ' featured-projects__filter--active' : ''}`} onClick={() => setActiveFilter(f)} aria-pressed={activeFilter === f}>{f}</button>
          ))}
        </div>
        <motion.div key={activeFilter} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="featured-projects__carousel">
          {filtered.length > 0 ? (
            <Carousel items={3} itemsTablet={2} itemsMobile={1} gap={24} autoplay={0} dots={true} carouselRef={carouselRef}>
              {filtered.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Carousel>
          ) : (
            <p className="featured-projects__empty">No projects found in this category.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, ongoingProjects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import FinalCTA from '../components/sections/FinalCTA';
import './Projects.css';

const filters = ['ALL', 'GOVERNMENT', 'COMMERCIAL', 'RESIDENTIAL', 'INDUSTRIAL', 'INSTITUTIONAL', 'INFRASTRUCTURE'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filtered = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.tag === activeFilter);

  return (
    <main className="projects-page">
      {/* Hero */}
      <section className="page-hero projects-hero">
        <div className="page-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80"
            alt="Projects portfolio overview"
            className="page-hero__img"
          />
          <div className="page-hero__overlay" aria-hidden="true" />
        </div>
        <div className="container page-hero__content">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Portfolio
          </motion.span>
          <motion.h1
            className="heading-display page-hero__heading"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Our Projects
          </motion.h1>
          <motion.p
            className="page-hero__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            A selection of completed and ongoing projects across all sectors.
          </motion.p>
        </div>
      </section>

      {/* Completed projects */}
      <section className="section projects-completed">
        <div className="container">
          <div className="projects-completed__header">
            <div>
              <span className="section-label">Completed Work</span>
              <h2 className="heading-xl projects-completed__heading">Selected Projects</h2>
            </div>
          </div>

          {/* Filters */}
          <div className="projects-filters" role="group" aria-label="Project category filters">
            {filters.map(f => (
              <button
                key={f}
                className={`projects-filter${activeFilter === f ? ' projects-filter--active' : ''}`}
                onClick={() => setActiveFilter(f)}
                aria-pressed={activeFilter === f}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            className="projects-grid"
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            {filtered.length > 0 ? (
              filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <p className="projects-empty">No projects found in this category.</p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Ongoing */}
      <section className="section projects-ongoing">
        <div className="container">
          <div className="projects-ongoing__header">
            <span className="section-label">In Progress</span>
            <h2 className="heading-xl">Current Projects</h2>
          </div>
          <div className="projects-grid">
            {ongoingProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}

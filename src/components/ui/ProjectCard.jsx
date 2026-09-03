import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="project-card"
      aria-label={`View project: ${project.name}`}
    >
      <div className="project-card__image-wrap">
        <img
          src={project.image}
          alt={project.name}
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__image-overlay" aria-hidden="true" />
        <div className="project-card__sector-tag">{project.sector}</div>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__location">
            <MapPin size={12} />
            {project.location}
          </span>
          <span
            className={`badge ${project.status === 'Completed' ? 'badge-completed' : 'badge-ongoing'}`}
          >
            {project.status !== 'Completed' && <span className="badge-dot" aria-hidden="true" />}
            {project.status}
          </span>
        </div>

        <h3 className="project-card__name">{project.name}</h3>

        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__footer">
          <span className="project-card__cta">
            View Project
            <ArrowRight size={14} className="project-card__arrow" />
          </span>
        </div>
      </div>
    </Link>
  );
}

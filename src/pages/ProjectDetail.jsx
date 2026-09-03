import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, X, MapPin, ArrowLeft, ArrowRight } from 'lucide-react';
import Carousel from '../components/ui/Carousel';
import { projects, ongoingProjects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import FinalCTA from '../components/sections/FinalCTA';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const allProjects = [...projects, ...ongoingProjects];
  const project = allProjects.find(p => p.id === id);

  const [activeImg, setActiveImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
  }, [id]);

  // Close lightbox on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') setActiveImg(i => (i + 1) % gallery.length);
      if (e.key === 'ArrowLeft') setActiveImg(i => (i - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen]);

  if (!project) {
    return (
      <main className="project-not-found">
        <div className="container">
          <h1>Project not found</h1>
          <Link to="/projects" className="btn btn-primary" style={{ marginTop: '2rem' }}>
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const gallery = project.gallery || [project.image];
  const related = projects.filter(p => p.id !== project.id && p.sector === project.sector).slice(0, 3);
  const relatedFallback = related.length >= 2 ? related : projects.filter(p => p.id !== project.id).slice(0, 3);

  return (
    <main className="project-detail">
      {/* Hero */}
      <section className="project-detail__hero">
        <div className="page-hero__bg">
          <img
            src={project.image}
            alt={project.name}
            className="page-hero__img"
          />
          <div className="page-hero__overlay" aria-hidden="true" />
        </div>
        <div className="container project-detail__hero-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/projects" className="project-detail__back">
              <ArrowLeft size={16} /> All Projects
            </Link>
          </motion.div>
          <motion.span
            className="badge badge-ongoing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.status === 'Ongoing' && <span className="badge-dot" aria-hidden="true" />}
            {project.status}
          </motion.span>
          <motion.h1
            className="heading-display project-detail__name"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {project.name}
          </motion.h1>
          <motion.div
            className="project-detail__hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <span><MapPin size={14} /> {project.location}</span>
            <span className="project-detail__hero-sep" aria-hidden="true">·</span>
            <span>{project.sector}</span>
            {project.year && (
              <>
                <span className="project-detail__hero-sep" aria-hidden="true">·</span>
                <span>{project.year}</span>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Info + Overview */}
      <section className="section project-detail__body">
        <div className="container">
          <div className="project-detail__layout">
            {/* Main content */}
            <div className="project-detail__main">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="section-label">Project Overview</span>
                <h2 className="heading-md project-detail__section-title">About This Project</h2>
                <p className="body-lg">{project.overview || project.description}</p>
              </motion.div>

              {project.scope && (
                <motion.div
                  className="project-detail__scope"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="heading-md project-detail__section-title">Construction Scope</h3>
                  <ul className="project-detail__scope-list" aria-label="Project construction scope">
                    {project.scope.map((item, i) => (
                      <li key={i} className="project-detail__scope-item">
                        <span className="project-detail__scope-num">{String(i + 1).padStart(2, '0')}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="project-detail__sidebar" aria-label="Project information">
              {[
                { label: 'Sector', value: project.sector },
                { label: 'Location', value: project.location },
                { label: 'Status', value: project.status },
                project.year && { label: 'Year', value: project.year },
                project.client && { label: 'Client', value: project.client },
                project.area && { label: 'Area', value: project.area },
                project.duration && { label: 'Duration', value: project.duration },
              ].filter(Boolean).map(item => (
                <div key={item.label} className="project-detail__info-row">
                  <span className="project-detail__info-label">{item.label}</span>
                  <span className="project-detail__info-value">{item.value}</span>
                </div>
              ))}
              <Link to="/contact" className="btn btn-primary project-detail__enquire">
                Start a Project <ArrowRight size={16} />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="section-sm project-detail__gallery-section" aria-labelledby="gallery-heading">
          <div className="container">
            <span className="section-label">Photography</span>
            <h2 id="gallery-heading" className="heading-md project-detail__section-title">Project Gallery</h2>

            {/* Main image */}
            <div
              className="gallery__main"
              onClick={() => setLightboxOpen(true)}
              role="button"
              tabIndex={0}
              aria-label={`View ${gallery[activeImg]} full screen`}
              onKeyDown={e => e.key === 'Enter' && setLightboxOpen(true)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={gallery[activeImg]}
                  alt={`${project.name} — gallery image ${activeImg + 1}`}
                  className="gallery__main-img"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              <div className="gallery__main-hint" aria-hidden="true">
                Click to enlarge
              </div>
            </div>

            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="gallery__thumbs" role="group" aria-label="Gallery thumbnails">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    className={`gallery__thumb${activeImg === i ? ' gallery__thumb--active' : ''}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`View image ${i + 1}`}
                    aria-pressed={activeImg === i}
                  >
                    <img src={img} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              className="lightbox__close"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <button
              className="lightbox__nav lightbox__nav--prev"
              onClick={() => setActiveImg(i => (i - 1 + gallery.length) % gallery.length)}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <div className="lightbox__img-wrap">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={gallery[activeImg]}
                  alt={`${project.name} — image ${activeImg + 1} of ${gallery.length}`}
                  className="lightbox__img"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </AnimatePresence>
            </div>
            <button
              className="lightbox__nav lightbox__nav--next"
              onClick={() => setActiveImg(i => (i + 1) % gallery.length)}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
            <div className="lightbox__counter" aria-live="polite">
              {activeImg + 1} / {gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Related Projects */}
      {relatedFallback.length > 0 && (
        <section className="section project-detail__related">
          <div className="container">
            <div className="section-header-row">
              <div>
                <span className="section-label">More Work</span>
                <h2 className="heading-xl">Related Projects</h2>
              </div>
              <div className="carousel-nav">
                <button className="carousel-nav-btn" onClick={() => carouselRef.current?.prev()} aria-label="Previous">
                  <ChevronLeft size={20} />
                </button>
                <button className="carousel-nav-btn" onClick={() => carouselRef.current?.next()} aria-label="Next">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            <Carousel items={3} itemsTablet={2} itemsMobile={1} gap={24} autoplay={0} dots={true} carouselRef={carouselRef}>
              {relatedFallback.map(p => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </Carousel>
          </div>
        </section>
      )}

      <FinalCTA />
    </main>
  );
}

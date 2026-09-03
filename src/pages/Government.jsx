import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import FinalCTA from '../components/sections/FinalCTA';
import './Government.css';

const categories = [
  {
    title: 'Federal & Provincial Buildings',
    desc: 'Government administration buildings, ministerial complexes and provincial facilities delivered within public procurement frameworks.',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80',
  },
  {
    title: 'Civic & Community Facilities',
    desc: 'Public service buildings, community centres, libraries and civic spaces designed to serve communities for generations.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
  },
  {
    title: 'Educational Campuses',
    desc: 'Universities, schools, research institutions and training centres built to specification for public education bodies.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
  },
  {
    title: 'Infrastructure Projects',
    desc: 'Roads, bridges, flyovers, drainage and utility networks delivered under national and provincial infrastructure programmes.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80',
  },
];

const govProjects = projects.filter(p => p.tag === 'GOVERNMENT' || p.tag === 'INSTITUTIONAL' || p.tag === 'INFRASTRUCTURE');

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Government() {
  return (
    <main className="gov-page">
      {/* Hero */}
      <section className="page-hero gov-hero">
        <div className="page-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1470723710355-95304d8aece4?w=1800&q=80"
            alt="Government institutional building"
            className="page-hero__img"
          />
          <div className="page-hero__overlay" aria-hidden="true" />
        </div>
        <div className="container page-hero__content">
          <motion.span className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Public Sector
          </motion.span>
          <motion.h1 className="heading-display page-hero__heading" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            Government &amp;<br />Institutional Projects
          </motion.h1>
          <motion.p className="page-hero__sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            Delivering public infrastructure, civic facilities and institutional buildings with precision, accountability and full compliance.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section gov-intro">
        <div className="container">
          <div className="gov-intro__grid">
            <motion.div {...fadeUp()}>
              <span className="section-label">Our Public Sector Capability</span>
              <h2 className="heading-xl gov-intro__heading">
                Building for<br />the Public Good
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.15)}>
              <p className="body-lg">
                Vertex has a strong track record of delivering construction projects for government bodies at federal, provincial and local levels. We understand the specific requirements of public sector procurement — compliance, accountability, transparency and quality — and we deliver accordingly.
              </p>
              <p className="body-base" style={{ marginTop: 'var(--space-4)' }}>
                From civic administration buildings and federal complexes to educational campuses and infrastructure programmes, our teams bring the experience and discipline needed to deliver public sector projects on time, within budget and to the required standard.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section gov-categories">
        <div className="container">
          <motion.div className="gov-categories__header" {...fadeUp()}>
            <span className="section-label">Project Types</span>
            <h2 className="heading-xl">What We Build</h2>
          </motion.div>
          <div className="gov-categories__grid">
            {categories.map((cat, i) => (
              <motion.div key={cat.title} className="gov-category-card" {...fadeUp(i * 0.1)}>
                <div className="gov-category-card__image-wrap">
                  <img src={cat.image} alt={cat.title} className="gov-category-card__image" loading="lazy" />
                  <div className="gov-category-card__overlay" aria-hidden="true" />
                </div>
                <div className="gov-category-card__content">
                  <h3 className="gov-category-card__title">{cat.title}</h3>
                  <p className="gov-category-card__desc">{cat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section gov-projects">
        <div className="container">
          <motion.div className="gov-projects__header" {...fadeUp()}>
            <span className="section-label">Portfolio</span>
            <h2 className="heading-xl">Government &amp; Institutional Work</h2>
          </motion.div>
          <div className="projects-grid">
            {govProjects.length > 0 ? govProjects.map((project, i) => (
              <motion.div key={project.id} {...fadeUp(i * 0.09)}>
                <ProjectCard project={project} />
              </motion.div>
            )) : (
              <div className="gov-projects__fallback">
                <p className="body-base">Explore our full project portfolio to see government and institutional work.</p>
                <Link to="/projects" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                  All Projects <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}

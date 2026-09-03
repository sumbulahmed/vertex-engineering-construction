import { motion } from 'framer-motion';
import { teamMembers } from '../data/team';
import FinalCTA from '../components/sections/FinalCTA';
import './Team.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Team() {
  return (
    <main className="team-page">
      {/* Hero */}
      <section className="page-hero team-hero">
        <div className="page-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1800&q=80"
            alt="Vertex Engineering team"
            className="page-hero__img"
            style={{ objectPosition: 'center 20%' }}
          />
          <div className="page-hero__overlay" aria-hidden="true" />
        </div>
        <div className="container page-hero__content">
          <motion.span className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>The People</motion.span>
          <motion.h1 className="heading-display page-hero__heading" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>Our Team</motion.h1>
          <motion.p className="page-hero__sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            Experienced professionals who bring technical expertise, project discipline and a shared commitment to quality.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="section team-intro">
        <div className="container">
          <div className="team-intro__grid">
            <motion.div {...fadeUp()}>
              <span className="section-label">Who We Are</span>
              <h2 className="heading-xl team-intro__heading">
                Experience,<br />Expertise, Discipline.
              </h2>
            </motion.div>
            <motion.p className="body-lg" {...fadeUp(0.15)}>
              Vertex's team is built from experienced construction professionals — project directors, engineers, managers and coordinators — who collectively bring decades of project delivery across Pakistan's most complex and demanding construction environments.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="section team-grid-section">
        <div className="container">
          <div className="team-page__grid">
            {teamMembers.map((member, i) => (
              <motion.article
                key={member.id}
                className="team-member-card"
                {...fadeUp(i * 0.1)}
                aria-label={`Team member: ${member.name}`}
              >
                <div className="team-member-card__image-wrap">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    className="team-member-card__image"
                    loading="lazy"
                  />
                  <div className="team-member-card__overlay" aria-hidden="true" />
                </div>
                <div className="team-member-card__body">
                  <span className="team-member-card__spec">{member.specialisation}</span>
                  <h2 className="team-member-card__name">{member.name}</h2>
                  <p className="team-member-card__role">{member.role}</p>
                  <p className="team-member-card__bio">{member.bio}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}

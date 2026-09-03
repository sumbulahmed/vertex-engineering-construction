import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const points = [
  {
    num: '01',
    title: 'Engineering Expertise',
    desc: 'Our in-house technical team brings deep structural, civil and MEP engineering capability to every project.',
  },
  {
    num: '02',
    title: 'Quality Control',
    desc: 'Rigorous QA/QC processes are embedded at every stage — from concrete pouring to final commissioning.',
  },
  {
    num: '03',
    title: 'Project Management',
    desc: 'Experienced PMs managing programme, cost, risk and stakeholder relationships throughout the project lifecycle.',
  },
  {
    num: '04',
    title: 'Safety First',
    desc: 'An uncompromising safety culture across all sites, with zero-harm as our primary objective.',
  },
  {
    num: '05',
    title: 'Reliable Delivery',
    desc: 'A consistent track record of on-time, on-budget delivery across complex multi-sector projects.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-us section" aria-labelledby="why-heading">
      <div className="container">
        <div className="why-us__grid">
          {/* Image */}
          <motion.div
            className="why-us__image-wrap"
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000&q=80"
              alt="Construction professionals reviewing plans on an active build site"
              className="why-us__image"
              loading="lazy"
            />
            <div className="why-us__image-overlay" aria-hidden="true" />
          </motion.div>

          {/* Content */}
          <div className="why-us__content">
            <motion.span
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Difference
            </motion.span>

            <motion.h2
              id="why-heading"
              className="heading-xl why-us__heading"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Why Build<br />with Vertex?
            </motion.h2>

            <div className="why-us__points">
              {points.map((p, i) => (
                <motion.div
                  key={p.num}
                  className="why-us__point"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: 0.15 + i * 0.08 }}
                >
                  <span className="why-us__point-num">{p.num}</span>
                  <div className="why-us__point-body">
                    <div className="why-us__point-title">{p.title}</div>
                    <div className="why-us__point-desc">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

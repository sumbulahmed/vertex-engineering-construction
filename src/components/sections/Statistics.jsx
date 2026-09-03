import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Statistics.css';

const stats = [
  { num: 20, suffix: '+', label: 'Years Experience', desc: 'Two decades of construction delivery' },
  { num: 150, suffix: '+', label: 'Projects Delivered', desc: 'Across all major sectors' },
  { num: 40, suffix: '+', label: 'Technical Professionals', desc: 'Engineers, managers & specialists' },
  { num: 4, suffix: '+', label: 'Major Sectors', desc: 'Government, commercial, residential & industrial' },
];

function AnimatedCounter({ target, suffix, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1600;
    const step = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function Statistics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="statistics section-sm" aria-label="Company statistics" ref={ref}>
      <div className="container">
        <div className="statistics__grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="statistics__item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="statistics__num" aria-label={`${s.num}${s.suffix} ${s.label}`}>
                <AnimatedCounter target={s.num} suffix={s.suffix} started={inView} />
              </div>
              <div className="statistics__label">{s.label}</div>
              <div className="statistics__desc">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

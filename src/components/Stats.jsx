import { useState, useEffect, useRef } from 'react';

const stats = [
  { icon: '👥', number: '10K+', label: 'Active Users', end: 10000 },
  { icon: '🚀', number: '500+', label: 'Projects Launched', end: 500 },
  { icon: '⭐', number: '99%', label: 'Satisfaction Rate', end: 99 },
  { icon: '🌍', number: '50+', label: 'Countries Served', end: 50 },
];

function useCountUp(end, duration = 2000, active) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, active]);

  return count;
}

function StatCard({ stat, active }) {
  const count = useCountUp(stat.end, 2000, active);
  const suffix = stat.number.replace(/\d+/g, '');
  return (
    <div className="stat-card">
      <div className="stat-icon">{stat.icon}</div>
      <div className="stat-number">{count.toLocaleString()}{suffix}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}

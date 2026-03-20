import { useState, useEffect, useRef } from 'react';

const progressItems = [
  { label: 'Performance', value: 98 },
  { label: 'Reliability', value: 99 },
  { label: 'User Satisfaction', value: 96 },
];

export default function About() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <p className="about-label">About Sewiigy</p>
            <h2 className="about-title">
              We&apos;re Redefining How<br />
              <span className="gradient-text">Teams Collaborate</span>
            </h2>
            <p className="about-description">
              Founded in 2023, Sewiigy was built with one mission: make powerful digital tools accessible to everyone. We believe great software should be beautiful, fast, and intuitive.
            </p>
            <p className="about-description">
              Our platform combines the best of AI, collaboration, and automation into a single seamless experience that thousands of teams rely on every day.
            </p>
            <ul className="about-features-list">
              {[
                'Built by designers and engineers who care about craft',
                'Backed by world-class investors and advisors',
                'Trusted by startups and Fortune 500 companies alike',
                '24/7 dedicated support with 2-minute response times',
              ].map((item, i) => (
                <li className="about-feature-item" key={i}>
                  <span className="check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary">Learn Our Story →</a>
          </div>

          <div className="about-visual">
            <div className="about-orb orb-1"></div>
            <div className="about-orb orb-2"></div>

            <div className="about-main-card">
              <div className="about-card-header">
                <div className="about-avatar">🎯</div>
                <div className="about-card-info">
                  <h4>Team Performance</h4>
                  <p>Last 30 days overview</p>
                </div>
              </div>
              <div className="progress-bars">
                {progressItems.map((item, i) => (
                  <div className="progress-item" key={i}>
                    <div className="progress-header">
                      <span>{item.label}</span>
                      <span>{item.value}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div
                        className="progress-bar-fill"
                        style={{ width: animated ? `${item.value}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-floating-badge about-badge-1">
              <span className="badge-emoji">🏆</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Top Rated</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Product of the Year</div>
              </div>
            </div>

            <div className="about-floating-badge about-badge-2">
              <span className="badge-emoji">💜</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>10K+ Happy</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Users worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="dot"></span>
            Now in Beta — Join 10K+ Early Users
          </div>
          <h1 className="hero-title">
            Build Smarter,<br />
            Grow <span className="gradient-text">Faster</span> with<br />
            Sewiigy
          </h1>
          <p className="hero-description">
            The all-in-one platform that transforms how you work. Collaborate, automate, and scale your projects with cutting-edge AI-powered tools.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Start for Free →
            </a>
            <a href="#features" className="btn-secondary">
              ▶ Watch Demo
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-stack">
            <div className="floating-card card-main">
              <div className="card-icon-big">🚀</div>
              <h3>Sewiigy Dashboard</h3>
              <p>All your tools in one place</p>
            </div>
            <div className="floating-card card-small-1">
              <span className="mini-icon">📈</span>
              <div>
                <div className="mini-label">Growth</div>
                <div className="mini-value">+247%</div>
              </div>
            </div>
            <div className="floating-card card-small-2">
              <span className="mini-icon">⚡</span>
              <div>
                <div className="mini-label">Speed</div>
                <div className="mini-value">99ms</div>
              </div>
            </div>
            <div className="progress-ring">
              <span>99%</span>
              <span>Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

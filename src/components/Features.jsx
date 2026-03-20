const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    desc: 'Optimized for speed with sub-100ms response times. Your workflow never slows down, no matter the scale.',
  },
  {
    icon: '🤖',
    title: 'AI-Powered',
    desc: 'Intelligent automation handles the repetitive tasks so you can focus on what truly matters and drives value.',
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    desc: 'End-to-end encryption, SOC 2 compliance, and advanced access controls keep your data safe at all times.',
  },
  {
    icon: '🌐',
    title: 'Global CDN',
    desc: 'Deliver content from 200+ edge locations worldwide. Your users get blazing fast experiences everywhere.',
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    desc: 'Real-time dashboards and deep insights help you make data-driven decisions with confidence every day.',
  },
  {
    icon: '🔗',
    title: '500+ Integrations',
    desc: 'Connect seamlessly with your favorite tools. Slack, GitHub, Notion, and hundreds more in one click.',
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Everything You Need to Succeed</h2>
        <p className="section-subtitle">
          Sewiigy brings together powerful tools and intelligent features to help your team move faster and build better products.
        </p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CTABanner() {
  return (
    <section className="cta-banner" id="contact">
      <div className="cta-banner-bg"></div>
      <div className="cta-banner-overlay"></div>
      <div className="cta-banner-blobs">
        <div className="cta-blob cta-blob-1"></div>
        <div className="cta-blob cta-blob-2"></div>
      </div>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Transform<br />Your Workflow?
          </h2>
          <p className="cta-subtitle">
            Join over 10,000 forward-thinking teams already using Sewiigy. Start your free trial today — no credit card required.
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn-white">
              🚀 Start Free Trial
            </a>
            <a href="#" className="btn-ghost">
              📅 Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Beta Program'],
  Company: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Partners'],
  Support: ['Documentation', 'Help Center', 'API Reference', 'Community', 'Status'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Sewiigy</div>
            <p className="footer-tagline">
              The all-in-one platform that transforms how modern teams work, collaborate, and grow.
            </p>
            <div className="footer-social">
              {['𝕏', '🔗', '📘', '▶', '💼'].map((icon, i) => (
                <div className="social-icon" key={i} role="button" tabIndex={0}>{icon}</div>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div className="footer-column" key={heading}>
              <h4>{heading}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 <span>Sewiigy</span>. All rights reserved. Made with ❤️
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

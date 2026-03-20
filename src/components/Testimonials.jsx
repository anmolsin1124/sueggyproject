const testimonials = [
  {
    stars: 5,
    text: "Sewiigy completely transformed how our team collaborates. The AI features alone saved us 20+ hours a week. I can't imagine going back to the old way of working.",
    avatar: '👩‍💼',
    name: 'Sarah Chen',
    role: 'VP of Product, TechCorp',
  },
  {
    stars: 5,
    text: "The analytics dashboard is absolutely incredible. We went from guessing to knowing exactly what our users need. Our retention rate jumped 40% in the first month.",
    avatar: '👨‍💻',
    name: 'Marcus Johnson',
    role: 'CTO, StartupFlow',
  },
  {
    stars: 5,
    text: "I've tried every platform out there, and Sewiigy is in a league of its own. The integrations work flawlessly and the UX is absolutely beautiful. Worth every penny.",
    avatar: '👩‍🎨',
    name: 'Priya Patel',
    role: 'Design Lead, CreativeStudio',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">Loved by Teams Worldwide</h2>
        <p className="section-subtitle">
          Don&apos;t just take our word for it — here&apos;s what our amazing community has to say about Sewiigy.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-stars">
                {'★'.repeat(t.stars)}
              </div>
              <p className="testimonial-text">&quot;{t.text}&quot;</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.avatar}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { SOLUTIONS, STATS } from "@/lib/catalog";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid-lines" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" /> Pharmaceutical &amp; biopharma equipment · Thailand
          </div>
          <h1 className="hero-title">
            Science and{" "}
            <span className="gradient-text">Pharmaceutical equipments</span>
          </h1>
          <p className="hero-desc">
            Consumable products Consultant services for Pharmaceutical and Biotechnology Solutions
          </p>
          <div className="hero-actions">
            <a href="#solutions" className="btn btn-primary btn-lg">Explore solutions</a>
            <a href="#contact" className="btn btn-outline btn-lg">Talk to an engineer →</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><strong>{STATS[0].value}</strong><span>{STATS[0].label}</span></div>
            <div className="stat-div" />
            <div className="stat"><strong>{STATS[1].value}</strong><span>{STATS[1].label}</span></div>
            <div className="stat-div" />
            <div className="stat"><strong>{STATS[3].value}</strong><span>{STATS[3].label}</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="solutions-card">
            <div className="solutions-card-head">
              <h3>Process solution areas</h3>
              <span className="pill">6 categories</span>
            </div>
            <div className="sc-list">
              {SOLUTIONS.map((s) => (
                <div className="sc-item" key={s.slug}>
                  <span className="ic">{s.icon}</span>
                  <span className="tx">{s.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

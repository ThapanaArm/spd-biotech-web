import { SOLUTIONS } from "@/lib/catalog";

export default function Solutions() {
  return (
    <section className="solutions" id="solutions">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Our solutions</span>
          <h2>Equipment for every critical process step</h2>
          <p>
            A complete portfolio of GMP-grade technology for sterile and biopharma
            manufacturing — selected from the world&apos;s leading brands.
          </p>
        </div>
        <div className="solutions-grid">
          {SOLUTIONS.map((s) => (
            <article className="solution-card" key={s.slug}>
              <div className={"solution-icon " + s.accent}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p className="blurb">{s.blurb}</p>
              <div className="solution-brands">
                {s.brands.map((b) => (
                  <span className="tag" key={b}>{b}</span>
                ))}
              </div>
              <ul className="solution-products">
                {s.products.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

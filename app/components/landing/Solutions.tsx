"use client";

import { SOLUTIONS } from "@/lib/catalog";
import { useLang } from "@/app/LangContext";

export default function Solutions() {
  const { t } = useLang();
  return (
    <section className="solutions" id="solutions">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{t.solutions.eyebrow}</span>
          <h2>{t.solutions.heading}</h2>
          <p>{t.solutions.body}</p>
        </div>
        <div className="solutions-grid">
          {SOLUTIONS.map((s) => {
            const tr = t.solutions.items[s.slug];
            return (
              <article className="solution-card" key={s.slug}>
                <div className={"solution-icon " + s.accent}>{s.icon}</div>
                <h3>{tr?.title ?? s.title}</h3>
                <p className="blurb">{tr?.blurb ?? s.blurb}</p>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

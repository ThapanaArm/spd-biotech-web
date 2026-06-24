"use client";

import { VALUE_PROPS, STATS } from "@/lib/catalog";
import { useLang } from "@/app/LangContext";

export default function WhyUs() {
  const { t } = useLang();
  return (
    <section className="whyus" id="why">
      <div className="container">
        {/* Company intro (moved here from the former About section) */}
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow">{t.why.aboutEyebrow}</span>
            <h2>{t.why.companyName}</h2>
            <p className="about-lead">{t.why.companyDesc}</p>
            <div className="about-meta">
              <span className="about-meta-label">{t.why.bizLabel}</span>
              <span className="about-meta-value">{t.why.bizCategory}</span>
            </div>
          </div>
          <div className="about-stats">
            {STATS.map((s, i) => (
              <div className="about-stat" key={i}>
                <strong>{s.value}</strong>
                <span>{t.why.stats[i] ?? s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why SPD value props */}
        <div className="section-header" style={{ marginTop: 72 }}>
          <span className="eyebrow">{t.why.eyebrow}</span>
          <h2>{t.why.heading}</h2>
          <p>{t.why.body}</p>
        </div>
        <div className="whyus-grid">
          {VALUE_PROPS.map((v, i) => (
            <div className="value-card" key={i}>
              <div className="value-icon">{v.icon}</div>
              <h3>{t.why.values[i]?.title ?? v.title}</h3>
              <p>{t.why.values[i]?.body ?? v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

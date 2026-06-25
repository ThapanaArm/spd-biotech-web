"use client";

import { useLang } from "@/app/LangContext";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.2 19 6v5.4c0 4.4-2.8 7.9-7 9.4-4.2-1.5-7-5-7-9.4V6l7-2.8Z" />
      <path d="m9.2 12 1.8 1.8 4.1-4.4" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 3h6" />
      <path d="M10 3v6.2L5.3 17a2.6 2.6 0 0 0 2.2 4h9a2.6 2.6 0 0 0 2.2-4L14 9.2V3" />
      <path d="M7.6 16h8.8" />
      <path d="M10.2 18.4h3.6" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.2 4.1c-6.7.4-11.4 2.4-13.8 6.1-2 3-1.5 6.2-.8 8 1.8.7 5 .9 8-1.1 3.8-2.5 5.8-7.1 6.6-13Z" />
      <path d="M5.7 18.1c2.6-3.5 5.5-6 9.5-7.8" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="btn-arrow">
      <path d="M5 12h12" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

const FEATURE_ICONS = [<ShieldIcon key="shield" />, <FlaskIcon key="flask" />, <LeafIcon key="leaf" />];

export default function Hero() {
  const { t } = useLang();
  const talkLabel = t.hero.talk.toLowerCase().includes("engineer")
    ? "Talk to an Engineer"
    : t.hero.talk;

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="container hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            <span>{t.hero.titleA}</span>
            <span className="gradient-text">{t.hero.titleB}</span>
          </h1>
          <p className="hero-desc">{t.hero.desc}</p>
          <div className="hero-actions">
            <a href="#solutions" className="btn btn-primary btn-lg">
              {t.hero.explore}
              <ArrowIcon />
            </a>
            <a href="#contact" className="btn btn-outline btn-lg">
              {talkLabel}
            </a>
          </div>
        </div>

        <div className="hero-features" aria-label="SPD Biotech strengths">
          {t.hero.features.map((f, i) => (
            <div className="hero-feature" key={f.title}>
              <span className="hf-icon">{FEATURE_ICONS[i]}</span>
              <div>
                <strong>{f.title}</strong>
                <span>{f.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

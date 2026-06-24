"use client";

import { SOLUTIONS } from "@/lib/catalog";
import { useLang } from "@/app/LangContext";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grid-lines" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" /> {t.hero.badge}
          </div>
          <h1 className="hero-title">
            {t.hero.titleA}
            <span className="gradient-text">{t.hero.titleB}</span>
          </h1>
          <p className="hero-desc">{t.hero.desc}</p>
          <div className="hero-actions">
            <a href="#solutions" className="btn btn-primary btn-lg">
              {t.hero.explore}
            </a>
            <a href="#contact" className="btn btn-outline btn-lg">
              {t.hero.talk}
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="solutions-card">
            <div className="solutions-card-head">
              <h3>{t.hero.cardTitle}</h3>
              <span className="pill">{t.hero.cardPill}</span>
            </div>
            <div className="sc-list">
              {SOLUTIONS.map((s) => (
                <div className="sc-item" key={s.slug}>
                  <span className="ic">{s.icon}</span>
                  <span className="tx">{t.solutions.items[s.slug]?.title ?? s.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

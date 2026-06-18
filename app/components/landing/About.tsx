import { STATS, COMPANY } from "@/lib/catalog";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow">About SPD Biotech</span>
            <h2>{COMPANY.nameTh}</h2>
            <p className="about-lead">{COMPANY.descriptionTh}</p>
            <div className="about-meta">
              <span className="about-meta-label">หมวดธุรกิจ</span>
              <span className="about-meta-value">{COMPANY.businessCategoryTh}</span>
            </div>
          </div>
          <div className="about-stats">
            {STATS.map((s) => (
              <div className="about-stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

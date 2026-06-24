import { VALUE_PROPS, STATS, COMPANY } from "@/lib/catalog";

export default function WhyUs() {
  return (
    <section className="whyus" id="why">
      <div className="container">
        {/* Company intro (moved here from the former About section) */}
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

        {/* Why SPD value props */}
        <div className="section-header" style={{ marginTop: 72 }}>
          <span className="eyebrow">Why SPD Biotech</span>
          <h2>More than a supplier</h2>
          <p>
            We pair leading equipment brands with local engineering expertise, so your
            process is supported from selection through to service.
          </p>
        </div>
        <div className="whyus-grid">
          {VALUE_PROPS.map((v) => (
            <div className="value-card" key={v.title}>
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

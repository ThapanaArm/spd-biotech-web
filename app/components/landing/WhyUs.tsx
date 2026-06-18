import { VALUE_PROPS } from "@/lib/catalog";

export default function WhyUs() {
  return (
    <section className="whyus" id="why">
      <div className="container">
        <div className="section-header">
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

import { TEAM } from "@/lib/catalog";

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Team() {
  const featured = TEAM.filter((m) => m.featured);
  const rest = TEAM.filter((m) => !m.featured);

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Our people</span>
          <h2>SPD Biotech Team</h2>
          <p>The team behind our equipment selection, application support and after-sales service.</p>
        </div>

        {featured.map((m) => (
          <div className="team-featured" key={m.name}>
            <div className="team-avatar lg" aria-hidden="true">{initials(m.name)}</div>
            <h3>{m.name}</h3>
            <span className="team-role">{m.title}</span>
          </div>
        ))}

        <div className="team-grid">
          {rest.map((m) => (
            <div className="team-card" key={m.name}>
              <div className="team-avatar" aria-hidden="true">{initials(m.name)}</div>
              <h3>{m.name}</h3>
              <span className="team-role">{m.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

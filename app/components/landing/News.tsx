import { getNews } from "@/lib/data";

export default async function News() {
  const news = await getNews();
  if (news.length === 0) return null;

  return (
    <section className="news" id="news">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">News &amp; Articles</span>
          <h2>ข่าวสารและบทความ</h2>
          <p>
            อัปเดตข่าวกิจกรรม สินค้าใหม่ และบทความความรู้ด้านอุปกรณ์เภสัชและไบโอเทคจาก
            SPD Biotech
          </p>
        </div>

        <div className="news-grid">
          {news.map((n) => (
            <article className="news-card" key={n.id ?? n.slug}>
              <div className={"news-cover " + n.accent}>
                <span className="news-emoji" aria-hidden="true">{n.icon}</span>
                <span className="news-tag">{n.category}</span>
              </div>
              <div className="news-body">
                <time className="news-date">{n.date}</time>
                <h3>{n.title}</h3>
                <p>{n.excerpt}</p>
                <span className="news-readmore">อ่านต่อ →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

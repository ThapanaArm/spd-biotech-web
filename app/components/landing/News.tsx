import Link from "next/link";
import { getNews } from "@/lib/data";
import NewsCard from "./NewsCard";

export default async function News() {
  const news = (await getNews()).slice(0, 3);
  if (news.length === 0) return null;

  return (
    <section className="news" id="news">
      <div className="container">
        <div className="news-head">
          <h2 className="news-heading">News &amp; Events</h2>
          <Link href="/news" className="news-more" aria-label="ดูข่าวทั้งหมด">
            ›
          </Link>
        </div>
        <div className="news-grid">
          {news.map((n) => (
            <NewsCard item={n} key={n.id ?? n.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}

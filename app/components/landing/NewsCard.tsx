import Link from "next/link";
import type { NewsArticle } from "@/lib/catalog";

export default function NewsCard({ item }: { item: NewsArticle }) {
  return (
    <article className="news-card">
      <Link href={`/news/${item.slug}`} className="news-cover-wrap">
        <div className={"news-cover" + (item.image ? "" : " " + item.accent)}>
          {item.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.image} alt={item.title} />
          ) : (
            <span className="news-emoji" aria-hidden="true">
              {item.icon}
            </span>
          )}
        </div>
      </Link>
      <div className="news-body">
        <span className="news-cat">{item.category}</span>
        <time className="news-date">{item.date}</time>
        <h3>
          <Link href={`/news/${item.slug}`}>{item.title}</Link>
        </h3>
        {item.excerpt && <p>{item.excerpt}</p>}
        <Link href={`/news/${item.slug}`} className="news-readmore">
          READ MORE
        </Link>
      </div>
    </article>
  );
}

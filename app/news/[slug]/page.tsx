import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import RichText from "../../components/RichText";
import { getNewsBySlug } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);
  return {
    title: article ? `${article.title} — SPD Biotech` : "News — SPD Biotech",
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <Navbar />
      <main className="article">
        <div className="container">
          <div className="article-inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">หน้าแรก</Link>
              <span className="sep">/</span>
              <Link href="/news">News &amp; Events</Link>
              <span className="sep">/</span>
              <span className="current">{article.title}</span>
            </nav>

            <div className="article-meta">
              <span className="article-cat">{article.category}</span>
              <span className="article-date">{article.date}</span>
            </div>
            <h1 className="article-title">{article.title}</h1>

            {article.image && (
              <div className="article-cover">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={article.image} alt={article.title} />
              </div>
            )}

            <div className="article-body">
              {article.content ? (
                <RichText text={article.content} />
              ) : (
                article.excerpt && <p className="detail-desc">{article.excerpt}</p>
              )}
            </div>

            <div className="article-back">
              <Link href="/news" className="btn btn-outline">
                ← กลับไปหน้า News &amp; Events
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

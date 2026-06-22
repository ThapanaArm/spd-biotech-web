import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import { getProduct } from "@/lib/data";

export const dynamic = "force-dynamic";

// Inline formatting: **text** or <b>text</b> -> bold.
function renderInline(text: string, keyBase: string): ReactNode[] {
  return text
    .split(/(\*\*[^*]+\*\*|<b>[\s\S]*?<\/b>)/g)
    .filter((s) => s !== "")
    .map((part, i) => {
      const md = part.match(/^\*\*([^*]+)\*\*$/);
      const html = part.match(/^<b>([\s\S]*?)<\/b>$/);
      if (md) return <strong key={`${keyBase}-${i}`}>{md[1]}</strong>;
      if (html) return <strong key={`${keyBase}-${i}`}>{html[1]}</strong>;
      return <span key={`${keyBase}-${i}`}>{part}</span>;
    });
}

// Renders the description text:
//   - a line starting with "- ", "* " or "• " becomes a chevron bullet
//   - consecutive plain lines become a paragraph (line breaks preserved)
//   - blank line separates blocks
function RichText({ text }: { text: string }) {
  const blocks: ReactNode[] = [];
  let bullets: string[] = [];
  let para: string[] = [];

  const flushBullets = () => {
    if (!bullets.length) return;
    const items = bullets;
    const key = `u${blocks.length}`;
    bullets = [];
    blocks.push(
      <ul className="detail-features" key={key}>
        {items.map((t, i) => (
          <li key={i}>{renderInline(t, `${key}-${i}`)}</li>
        ))}
      </ul>
    );
  };
  const flushPara = () => {
    if (!para.length) return;
    const ls = para;
    const key = `p${blocks.length}`;
    para = [];
    blocks.push(
      <p className="detail-desc" key={key}>
        {ls.map((line, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {renderInline(line, `${key}-${i}`)}
          </span>
        ))}
      </p>
    );
  };

  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    const bullet = line.match(/^[-*•]\s+(.*)$/);
    if (bullet) {
      flushPara();
      bullets.push(bullet[1]);
    } else if (line === "") {
      flushBullets();
      flushPara();
    } else {
      flushBullets();
      para.push(line);
    }
  }
  flushBullets();
  flushPara();
  return <>{blocks}</>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);
  return {
    title: product
      ? `${product.nameEn ?? product.name} — SPD Biotech`
      : "Product — SPD Biotech",
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) notFound();

  const subtitle = product.tagline ?? product.nameEn;
  const specs = product.specs ?? [];

  return (
    <>
      <Navbar />
      <main className="detail">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">หน้าแรก</Link>
            <span className="sep">/</span>
            <a href="/#products">{product.category}</a>
            <span className="sep">/</span>
            <span className="current">{product.name}</span>
          </nav>

          <div className="detail-grid">
            <div className="detail-media">
              {product.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={product.image} alt={product.nameEn ?? product.name} />
              ) : (
                <span className="detail-emoji" aria-hidden="true">
                  {product.icon}
                </span>
              )}
            </div>

            <div className="detail-info">
              <h2>{product.name}</h2>
              {subtitle && <div className="detail-tagline">{subtitle}</div>}
              {product.description && <RichText text={product.description} />}
              {specs.length > 0 && (
                <ul className="detail-specs">
                  {specs.map((s) => (
                    <li key={s.label}>
                      <strong>{s.label}:</strong> {s.value}
                    </li>
                  ))}
                </ul>
              )}
              {product.brand && (
                <p className="detail-brand">Brand : {product.brand}</p>
              )}
              <div className="detail-actions">
                <a href="/#contact" className="btn btn-primary">
                  ขอใบเสนอราคา
                </a>
                <a href="/#products" className="btn btn-outline">
                  ← กลับไปดูสินค้าทั้งหมด
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

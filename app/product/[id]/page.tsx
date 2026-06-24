import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import RichText from "../../components/RichText";
import { getProduct } from "@/lib/data";

export const dynamic = "force-dynamic";

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
            <a href="/product">{product.category}</a>
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
                <a href="/product" className="btn btn-outline">
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

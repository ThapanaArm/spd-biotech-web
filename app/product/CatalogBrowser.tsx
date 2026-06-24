"use client";

import Link from "next/link";
import { useState } from "react";
import ProductThumb from "../components/landing/ProductThumb";
import type { Product } from "@/lib/catalog";

export default function CatalogBrowser({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) {
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const matches = (p: Product) =>
    !q ||
    p.name.toLowerCase().includes(q) ||
    (p.nameEn?.toLowerCase().includes(q) ?? false) ||
    (p.brand?.toLowerCase().includes(q) ?? false) ||
    p.category.toLowerCase().includes(q);

  const filtered = products.filter(
    (p) => (!activeCat || p.category === activeCat) && matches(p)
  );

  const visibleCats = (activeCat ? [activeCat] : categories).filter((c) =>
    filtered.some((p) => p.category === c)
  );

  const countIn = (cat: string) =>
    products.filter((p) => p.category === cat).length;

  return (
    <div className="catalog-layout">
      <aside className="catalog-sidebar">
        <h2 className="catalog-sidebar-title">หมวดสินค้า</h2>
        <ul>
          <li>
            <button
              type="button"
              className={!activeCat ? "active" : ""}
              onClick={() => setActiveCat(null)}
            >
              <span>ทั้งหมด</span>
              <span className="c">{products.length}</span>
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat}>
              <button
                type="button"
                className={activeCat === cat ? "active" : ""}
                onClick={() => setActiveCat(cat)}
              >
                <span>{cat}</span>
                <span className="c">{countIn(cat)}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="catalog-main">
        <div className="catalog-search">
          <input
            type="search"
            placeholder="ค้นหาสินค้า… (ชื่อ / แบรนด์)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="ค้นหาสินค้า"
          />
          {(q || activeCat) && (
            <span className="catalog-result-count">พบ {filtered.length} รายการ</span>
          )}
        </div>

        {filtered.length === 0 ? (
          <p className="catalog-empty">ไม่พบสินค้าที่ตรงกับการค้นหา</p>
        ) : (
          visibleCats.map((cat) => {
            const items = filtered.filter((p) => p.category === cat);
            if (items.length === 0) return null;
            return (
              <section className="catalog-group" key={cat}>
                <h2 className="catalog-group-title">
                  {cat}
                  <span className="count">({items.length})</span>
                </h2>
                <div className="catalog-grid">
                  {items.map((p) => (
                    <Link
                      className="product-card"
                      href={`/product/${p.id}`}
                      key={p.id}
                    >
                      <ProductThumb product={p} />
                      <div className="product-body">
                        <h3>{p.name}</h3>
                        {p.nameEn && <p className="product-sub">{p.nameEn}</p>}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })
        )}
      </div>
    </div>
  );
}

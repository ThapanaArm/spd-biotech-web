"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ProductThumb from "../components/landing/ProductThumb";
import { PRODUCT_GROUPS } from "@/lib/catalog";
import type { CategorySub, Product } from "@/lib/catalog";

type Scope =
  | { mode: "all" }
  | { mode: "group"; key: string }
  | { mode: "sub"; key: string }; // key = `${groupKey}|${subTitle}`

const UNGROUPED_KEY = "__other";

export default function CatalogBrowser({ products }: { products: Product[] }) {
  const [scope, setScope] = useState<Scope>({ mode: "all" });
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [query, setQuery] = useState("");

  // Build the display tree: the fixed taxonomy, plus a trailing bucket for any
  // product whose category is not (or no longer) part of it.
  const groups = useMemo(() => {
    const known = new Set(
      PRODUCT_GROUPS.flatMap((g) => g.subs.map((s) => s.title))
    );
    const strays = [
      ...new Set(products.map((p) => p.category).filter((c) => !known.has(c))),
    ];
    const tree = PRODUCT_GROUPS.map((g) => ({
      key: g.key,
      title: g.title,
      subs: g.subs,
    }));
    if (strays.length) {
      tree.push({
        key: UNGROUPED_KEY,
        title: "อื่น ๆ",
        subs: strays.map((title): CategorySub => ({ title, brands: [] })),
      });
    }
    return tree;
  }, [products]);

  const q = query.trim().toLowerCase();
  const matchesQuery = (p: Product) =>
    !q ||
    p.name.toLowerCase().includes(q) ||
    (p.nameEn?.toLowerCase().includes(q) ?? false) ||
    (p.brand?.toLowerCase().includes(q) ?? false) ||
    p.category.toLowerCase().includes(q);

  const subKey = (groupKey: string, subTitle: string) =>
    `${groupKey}|${subTitle}`;

  const inScope = (groupKey: string, subTitle: string) =>
    scope.mode === "all" ||
    (scope.mode === "group" && scope.key === groupKey) ||
    (scope.mode === "sub" && scope.key === subKey(groupKey, subTitle));

  const itemsOf = (subTitle: string) =>
    products.filter((p) => p.category === subTitle && matchesQuery(p));

  const countIn = (subTitle: string) =>
    products.filter((p) => p.category === subTitle).length;

  const countGroup = (g: (typeof groups)[number]) =>
    g.subs.reduce((n, s) => n + countIn(s.title), 0);

  // Counted per product, not per section: a product in a shared sub-category
  // is rendered under both groups but is still one product.
  const shown = products.filter(
    (p) =>
      matchesQuery(p) &&
      groups.some((g) =>
        g.subs.some((s) => s.title === p.category && inScope(g.key, s.title))
      )
  ).length;

  const onGroupClick = (key: string) => {
    // Clicking the active group again folds it away.
    const isActive = scope.mode === "group" && scope.key === key;
    setCollapsed((c) => ({ ...c, [key]: isActive ? !c[key] : false }));
    setScope({ mode: "group", key });
  };

  return (
    <div className="catalog-layout">
      <aside className="catalog-sidebar">
        <h2 className="catalog-sidebar-title">หมวดสินค้า</h2>
        <ul>
          <li>
            <button
              type="button"
              className={scope.mode === "all" ? "active" : ""}
              onClick={() => setScope({ mode: "all" })}
            >
              <span>ทั้งหมด</span>
              <span className="c">{products.length}</span>
            </button>
          </li>
          {groups.map((g) => (
            <li
              key={g.key}
              className={"grp" + (collapsed[g.key] ? " collapsed" : "")}
            >
              <button
                type="button"
                className={
                  "grp-btn" +
                  (scope.mode === "group" && scope.key === g.key
                    ? " active"
                    : "")
                }
                aria-expanded={!collapsed[g.key]}
                onClick={() => onGroupClick(g.key)}
              >
                <span className="grp-caret" aria-hidden="true">
                  ▾
                </span>
                <span className="grp-title">{g.title}</span>
                <span className="c">{countGroup(g)}</span>
              </button>
              <ul className="sub-list">
                {g.subs.map((s) => {
                  const n = countIn(s.title);
                  return (
                    <li key={s.title}>
                      <button
                        type="button"
                        className={
                          "sub-btn" +
                          (n ? "" : " zero") +
                          (scope.mode === "sub" &&
                          scope.key === subKey(g.key, s.title)
                            ? " active"
                            : "")
                        }
                        onClick={() =>
                          setScope({ mode: "sub", key: subKey(g.key, s.title) })
                        }
                      >
                        <span>{s.title}</span>
                        <span className="c">{n}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
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
          {(q || scope.mode !== "all") && (
            <span className="catalog-result-count">พบ {shown} รายการ</span>
          )}
        </div>

        {groups.map((g) => {
          const sections = g.subs
            .map((s) => ({ sub: s, items: itemsOf(s.title) }))
            .filter(({ sub, items }) => {
              if (!inScope(g.key, sub.title)) return false;
              if (items.length) return true;
              // An empty sub-category shows only when it is opened directly
              // (or its whole group is), and never during a search.
              return !q && scope.mode !== "all";
            });
          if (!sections.length) return null;

          return (
            <div key={g.key}>
              <div className="group-banner">
                <div className="gb-head">
                  <h2>{g.title}</h2>
                  <span className="gb-count">{countGroup(g)} รายการ</span>
                </div>
              </div>

              {sections.map(({ sub, items }) => (
                <section className="catalog-group" key={subKey(g.key, sub.title)}>
                  <h2 className="catalog-group-title">
                    {sub.title}
                    <span className="count">({items.length})</span>
                  </h2>

                  {sub.brands.length > 0 && (
                    <div className="brand-row">
                      <span className="brand-label">Brand</span>
                      {sub.brands.map((b) => (
                        <span className="brand-chip" key={b}>
                          {b}
                        </span>
                      ))}
                    </div>
                  )}

                  {items.length === 0 && sub.contact && (
                    <div className="sub-contact">
                      <p>
                        {sub.contact.th}{" "}
                        <a href={`tel:${sub.contact.phone.replace(/-/g, "")}`}>
                          {sub.contact.phone}
                        </a>
                      </p>
                      <p className="en">
                        {sub.contact.en}{" "}
                        <a href={`tel:${sub.contact.phone.replace(/-/g, "")}`}>
                          {sub.contact.phone}
                        </a>
                      </p>
                    </div>
                  )}

                  {items.length === 0 && !sub.contact && (
                    <p className="sub-empty">
                      ยังไม่มีสินค้าในหมวดนี้ — ติดต่อฝ่ายขายเพื่อสอบถามข้อมูลเพิ่มเติม
                    </p>
                  )}

                  {items.length > 0 && (
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
                            {p.nameEn && (
                              <p className="product-sub">{p.nameEn}</p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          );
        })}

        {shown === 0 && q && (
          <p className="catalog-empty">ไม่พบสินค้าที่ตรงกับการค้นหา</p>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import NewsCard from "../components/landing/NewsCard";
import type { NewsArticle } from "@/lib/catalog";

function yearOf(date: string): string | null {
  const m = date.match(/(\d{4})/);
  return m ? m[1] : null;
}

export default function NewsBrowser({ items }: { items: NewsArticle[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("ALL");
  const [year, setYear] = useState("ALL");

  const categories = [...new Set(items.map((i) => i.category))];
  const years = [
    ...new Set(items.map((i) => yearOf(i.date)).filter(Boolean) as string[]),
  ].sort((a, b) => b.localeCompare(a));

  const q = query.trim().toLowerCase();
  const filtered = items.filter(
    (i) =>
      (category === "ALL" || i.category === category) &&
      (year === "ALL" || yearOf(i.date) === year) &&
      (!q ||
        i.title.toLowerCase().includes(q) ||
        (i.excerpt?.toLowerCase().includes(q) ?? false))
  );

  return (
    <>
      <div className="news-filters">
        <div className="nf">
          <label htmlFor="nq">ค้นหา</label>
          <input
            id="nq"
            type="search"
            placeholder="ค้นหาข่าว / กิจกรรม…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="nf">
          <label htmlFor="ncat">หมวดหมู่</label>
          <select
            id="ncat"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="ALL">ทั้งหมด</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="nf">
          <label htmlFor="nyear">ปี</label>
          <select
            id="nyear"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="ALL">ล่าสุด</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="news-empty">ไม่พบข่าวที่ตรงกับการค้นหา</p>
      ) : (
        <div className="news-grid">
          {filtered.map((n) => (
            <NewsCard item={n} key={n.id ?? n.slug} />
          ))}
        </div>
      )}
    </>
  );
}

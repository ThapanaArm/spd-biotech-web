"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { NEWS_ACCENTS, type NewsArticle } from "@/lib/catalog";

export default function NewsForm({ item }: { item?: NewsArticle }) {
  const router = useRouter();
  const isEdit = Boolean(item?.id);

  const [slug, setSlug] = useState(item?.slug ?? "");
  const [category, setCategory] = useState(item?.category ?? "");
  const [date, setDate] = useState(item?.date ?? "");
  const [title, setTitle] = useState(item?.title ?? "");
  const [excerpt, setExcerpt] = useState(item?.excerpt ?? "");
  const [icon, setIcon] = useState(item?.icon ?? "📰");
  const [accent, setAccent] = useState<string>(item?.accent ?? "green");
  const [sortOrder, setSortOrder] = useState<number>(item?.sortOrder ?? 0);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);
    const payload = {
      slug,
      category,
      date,
      title,
      excerpt,
      icon,
      accent,
      sortOrder: Number(sortOrder) || 0,
    };
    const res = await fetch(
      isEdit ? `/api/admin/news/${item!.id}` : "/api/admin/news",
      {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    setSaving(false);
    if (res.ok) {
      router.push("/admin/news");
      router.refresh();
    } else {
      const d = await res.json().catch(() => ({}));
      setError(d.error || "บันทึกไม่สำเร็จ");
    }
  }

  return (
    <form className="admin-form" onSubmit={onSubmit}>
      {error && <div className="form-error">{error}</div>}

      <div className="grid2">
        <div className="field">
          <label htmlFor="slug">Slug *</label>
          <input
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="เช่น thailand-lab-2026"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="sort">ลำดับการแสดง</label>
          <input
            id="sort"
            type="number"
            value={sortOrder}
            onChange={(e) => setSortOrder(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="title">หัวข้อ *</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="grid2">
        <div className="field">
          <label htmlFor="category">หมวดหมู่ *</label>
          <input
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="เช่น กิจกรรม / สินค้าใหม่ / บทความความรู้"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="date">วันที่ (ข้อความ) *</label>
          <input
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="เช่น 10 มิถุนายน 2026"
            required
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="excerpt">เนื้อหาย่อ</label>
        <textarea
          id="excerpt"
          rows={3}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />
      </div>

      <div className="grid2">
        <div className="field">
          <label htmlFor="icon">ไอคอน (emoji)</label>
          <input
            id="icon"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="accent">สีธีมการ์ด</label>
          <select
            id="accent"
            value={accent}
            onChange={(e) => setAccent(e.target.value)}
          >
            {NEWS_ACCENTS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={saving}>
          {saving ? "กำลังบันทึก…" : isEdit ? "บันทึกการแก้ไข" : "เพิ่มข่าว"}
        </button>
        <button
          type="button"
          className="btn btn-outline"
          onClick={() => router.push("/admin/news")}
        >
          ยกเลิก
        </button>
      </div>
    </form>
  );
}

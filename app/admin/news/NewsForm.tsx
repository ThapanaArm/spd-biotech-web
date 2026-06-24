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
  const [image, setImage] = useState(item?.image ?? "");
  const [excerpt, setExcerpt] = useState(item?.excerpt ?? "");
  const [content, setContent] = useState(item?.content ?? "");
  const [icon, setIcon] = useState(item?.icon ?? "📰");
  const [accent, setAccent] = useState<string>(item?.accent ?? "green");
  const [sortOrder, setSortOrder] = useState<number>(item?.sortOrder ?? 0);

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
    setUploading(false);
    if (res.ok) {
      const d = await res.json();
      setImage(d.url);
    } else {
      const d = await res.json().catch(() => ({}));
      setError(d.error || "อัปโหลดรูปไม่สำเร็จ");
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);
    const payload = {
      slug,
      category,
      date,
      title,
      image,
      excerpt,
      content,
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
            onChange={(e) =>
              setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, "-"))
            }
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
            placeholder="เช่น News / Event / บทความ"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="date">วันที่ (ข้อความ) *</label>
          <input
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="เช่น 29 May 2026"
            required
          />
          <span className="hint">ใส่ปี ค.ศ. 4 หลัก เพื่อให้ตัวกรองปีทำงาน</span>
        </div>
      </div>

      <div className="field">
        <label>รูปข่าว</label>
        <div className="image-upload">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="preview" src={image} alt="preview" />
          ) : (
            <span className="preview empty">{icon}</span>
          )}
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={onUpload}
              disabled={uploading}
            />
            {uploading && <p className="hint">กำลังอัปโหลด…</p>}
            {image && (
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => setImage("")}
              >
                ลบรูป
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="excerpt">เนื้อหาย่อ (แสดงบนการ์ด)</label>
        <textarea
          id="excerpt"
          rows={2}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="content">เนื้อหาเต็ม (แสดงในหน้ารายละเอียด)</label>
        <textarea
          id="content"
          rows={8}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <span className="hint">
          ขึ้นต้นบรรทัดด้วย “- ” = bullet · ครอบ **ข้อความ** หรือ
          &lt;b&gt;ข้อความ&lt;/b&gt; = ตัวหนา
        </span>
      </div>

      <div className="grid2">
        <div className="field">
          <label htmlFor="icon">ไอคอน (emoji, ใช้เมื่อไม่มีรูป)</label>
          <input
            id="icon"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="accent">สีธีม (ใช้เมื่อไม่มีรูป)</label>
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
        <button className="btn btn-primary" type="submit" disabled={saving || uploading}>
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

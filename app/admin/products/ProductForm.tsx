"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  PRODUCT_CATEGORIES,
  PRODUCT_TONES,
  type Product,
  type ProductSpec,
} from "@/lib/catalog";

export default function ProductForm({ product }: { product?: Product }) {
  const router = useRouter();
  const isEdit = Boolean(product);

  const [id, setId] = useState(product?.id ?? "");
  const [name, setName] = useState(product?.name ?? "");
  const [nameEn, setNameEn] = useState(product?.nameEn ?? "");
  const [brand, setBrand] = useState(product?.brand ?? "");
  const [category, setCategory] = useState<string>(
    product?.category ?? PRODUCT_CATEGORIES[0]
  );
  const [tone, setTone] = useState<string>(product?.tone ?? "device");
  const [icon, setIcon] = useState(product?.icon ?? "📦");
  const [image, setImage] = useState(product?.image ?? "");
  const [tagline, setTagline] = useState(product?.tagline ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [specs, setSpecs] = useState<ProductSpec[]>(
    product?.specs?.length ? product.specs : [{ label: "", value: "" }]
  );
  const [sortOrder, setSortOrder] = useState<number>(product?.sortOrder ?? 0);

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

  function setSpec(i: number, key: keyof ProductSpec, val: string) {
    setSpecs((s) => s.map((sp, idx) => (idx === i ? { ...sp, [key]: val } : sp)));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);
    const cleanSpecs = specs.filter((s) => s.label.trim() || s.value.trim());
    const payload = {
      id,
      name,
      nameEn,
      brand,
      category,
      tone,
      icon,
      image,
      tagline,
      description,
      specs: cleanSpecs,
      sortOrder: Number(sortOrder) || 0,
    };
    const res = await fetch(
      isEdit ? `/api/admin/products/${product!.id}` : "/api/admin/products",
      {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    setSaving(false);
    if (res.ok) {
      router.push("/admin/products");
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
          <label htmlFor="id">ID / slug *</label>
          <input
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            disabled={isEdit}
            placeholder="เช่น qjet-ct10"
            required
          />
          <span className="hint">
            {isEdit ? "แก้ไข ID ไม่ได้" : "ใช้ใน URL /product/<id> — อังกฤษพิมพ์เล็ก-ขีดกลาง"}
          </span>
        </div>
        <div className="field">
          <label htmlFor="sort">ลำดับการแสดง</label>
          <input
            id="sort"
            type="number"
            value={sortOrder}
            onChange={(e) => setSortOrder(Number(e.target.value))}
          />
          <span className="hint">เลขน้อยมาก่อน</span>
        </div>
      </div>

      <div className="grid2">
        <div className="field">
          <label htmlFor="name">ชื่อสินค้า (ไทย) *</label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="nameEn">ชื่อสินค้า (อังกฤษ)</label>
          <input
            id="nameEn"
            value={nameEn}
            onChange={(e) => setNameEn(e.target.value)}
          />
        </div>
      </div>

      <div className="grid2">
        <div className="field">
          <label htmlFor="category">หมวดหมู่ *</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {PRODUCT_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="brand">แบรนด์</label>
          <input
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
      </div>

      <div className="grid2">
        <div className="field">
          <label htmlFor="tone">โทนพื้นหลัง (เมื่อไม่มีรูป)</label>
          <select id="tone" value={tone} onChange={(e) => setTone(e.target.value)}>
            {PRODUCT_TONES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="icon">ไอคอน (emoji, ใช้เมื่อไม่มีรูป)</label>
          <input
            id="icon"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label>รูปสินค้า</label>
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
        <span className="hint">รองรับการอัปโหลดไฟล์รูป (เก็บใน Supabase Storage)</span>
      </div>

      <div className="field">
        <label htmlFor="tagline">หัวข้อย่อย (tagline)</label>
        <input
          id="tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          placeholder="เช่น Portable aerosol fogger"
        />
      </div>

      <div className="field">
        <label htmlFor="desc">รายละเอียด</label>
        <textarea
          id="desc"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="field">
        <label>สเปก (label / value)</label>
        {specs.map((s, i) => (
          <div className="spec-row" key={i}>
            <input
              placeholder="หัวข้อ เช่น Brand"
              value={s.label}
              onChange={(e) => setSpec(i, "label", e.target.value)}
            />
            <input
              placeholder="ค่า เช่น Sanosil"
              value={s.value}
              onChange={(e) => setSpec(i, "value", e.target.value)}
            />
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => setSpecs((sp) => sp.filter((_, idx) => idx !== i))}
            >
              ✕
            </button>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-outline btn-sm"
          onClick={() => setSpecs((sp) => [...sp, { label: "", value: "" }])}
        >
          + เพิ่มสเปก
        </button>
      </div>

      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={saving || uploading}>
          {saving ? "กำลังบันทึก…" : isEdit ? "บันทึกการแก้ไข" : "เพิ่มสินค้า"}
        </button>
        <button
          type="button"
          className="btn btn-outline"
          onClick={() => router.push("/admin/products")}
        >
          ยกเลิก
        </button>
      </div>
    </form>
  );
}

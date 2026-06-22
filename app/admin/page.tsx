import Link from "next/link";
import { getProducts, getNews } from "@/lib/data";
import { getSession } from "@/lib/session";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const session = await getSession();
  const [products, news] = await Promise.all([getProducts(), getNews()]);
  const hasServiceKey = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);

  return (
    <>
      <div className="admin-topbar">
        <div>
          <h1 className="admin-h1">ภาพรวม</h1>
          <p className="admin-sub">เข้าสู่ระบบในชื่อ {session?.u}</p>
        </div>
      </div>

      {!hasServiceKey && (
        <div className="admin-banner">
          ⚠️ ยังไม่ได้ตั้งค่า <code>SUPABASE_SERVICE_ROLE_KEY</code> ใน{" "}
          <code>.env.local</code> — ดูข้อมูลได้ แต่การ <b>เพิ่ม / แก้ไข / ลบ / อัปโหลดรูป</b>{" "}
          จะยังไม่ทำงานจนกว่าจะใส่ key แล้วรีสตาร์ทเซิร์ฟเวอร์
        </div>
      )}

      <div className="admin-cards">
        <Link href="/admin/products" className="admin-card">
          <span className="ic">📦</span>
          <h3>สินค้า</h3>
          <p>
            จัดการรายการสินค้า รูปภาพ และรายละเอียด ·{" "}
            <span className="count">{products.length}</span> รายการ
          </p>
        </Link>
        <Link href="/admin/news" className="admin-card">
          <span className="ic">📰</span>
          <h3>ข่าวสารและบทความ</h3>
          <p>
            จัดการข่าว กิจกรรม และบทความ ·{" "}
            <span className="count">{news.length}</span> รายการ
          </p>
        </Link>
      </div>
    </>
  );
}

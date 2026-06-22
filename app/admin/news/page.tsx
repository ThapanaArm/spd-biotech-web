import Link from "next/link";
import { getNews } from "@/lib/data";
import DeleteButton from "../DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminNewsPage() {
  const news = await getNews();

  return (
    <>
      <div className="admin-topbar">
        <div>
          <h1 className="admin-h1">ข่าวสารและบทความ</h1>
          <p className="admin-sub">{news.length} รายการ</p>
        </div>
        <div className="spacer" />
        <Link href="/admin/news/new" className="btn btn-primary">
          + เพิ่มข่าว
        </Link>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th style={{ width: 56 }}></th>
            <th>หัวข้อ</th>
            <th>หมวดหมู่</th>
            <th>วันที่</th>
            <th style={{ width: 150 }}></th>
          </tr>
        </thead>
        <tbody>
          {news.map((n) => (
            <tr key={n.id ?? n.slug}>
              <td style={{ fontSize: 22 }}>{n.icon}</td>
              <td>
                <strong>{n.title}</strong>
                <br />
                <span className="admin-muted" style={{ fontSize: 12 }}>
                  {n.slug}
                </span>
              </td>
              <td>
                <span className="admin-pill">{n.category}</span>
              </td>
              <td className="admin-muted">{n.date}</td>
              <td>
                <div className="row-actions">
                  <Link
                    href={`/admin/news/${n.id}`}
                    className="btn btn-outline btn-sm"
                  >
                    แก้ไข
                  </Link>
                  <DeleteButton
                    endpoint={`/api/admin/news/${n.id}`}
                    name={n.title}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

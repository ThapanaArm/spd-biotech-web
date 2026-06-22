import Link from "next/link";
import { getProducts } from "@/lib/data";
import DeleteButton from "../DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <>
      <div className="admin-topbar">
        <div>
          <h1 className="admin-h1">สินค้า</h1>
          <p className="admin-sub">{products.length} รายการ</p>
        </div>
        <div className="spacer" />
        <Link href="/admin/products/new" className="btn btn-primary">
          + เพิ่มสินค้า
        </Link>
      </div>

      <table className="admin-table">
        <thead>
          <tr>
            <th style={{ width: 70 }}>รูป</th>
            <th>ชื่อ</th>
            <th>หมวดหมู่</th>
            <th>แบรนด์</th>
            <th style={{ width: 150 }}></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="admin-thumb" src={p.image} alt="" />
                ) : (
                  <span style={{ fontSize: 22 }}>{p.icon}</span>
                )}
              </td>
              <td>
                <strong>{p.name}</strong>
                {p.nameEn && (
                  <>
                    <br />
                    <span className="admin-muted" style={{ fontSize: 12 }}>
                      {p.nameEn}
                    </span>
                  </>
                )}
              </td>
              <td>
                <span className="admin-pill">{p.category}</span>
              </td>
              <td className="admin-muted">{p.brand || "—"}</td>
              <td>
                <div className="row-actions">
                  <Link
                    href={`/admin/products/${p.id}`}
                    className="btn btn-outline btn-sm"
                  >
                    แก้ไข
                  </Link>
                  <DeleteButton
                    endpoint={`/api/admin/products/${p.id}`}
                    name={p.name}
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

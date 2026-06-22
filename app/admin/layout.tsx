import Link from "next/link";
import "./admin.css";
import { getSession } from "@/lib/session";
import LogoutButton from "./LogoutButton";

export const metadata = { title: "Back Office — SPD Biotech" };

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <div className="admin">
      {session && (
        <header className="admin-header">
          <div className="admin-header-inner">
            <Link href="/admin" className="admin-brand">
              SPD<span className="dot"> Biotech</span> · Back office
            </Link>
            <nav className="admin-nav">
              <Link href="/admin/products">สินค้า</Link>
              <Link href="/admin/news">ข่าวสาร</Link>
              <Link href="/" target="_blank" rel="noopener">
                ดูเว็บไซต์ ↗
              </Link>
              <LogoutButton />
            </nav>
          </div>
        </header>
      )}
      <main className={session ? "admin-main" : ""}>{children}</main>
    </div>
  );
}

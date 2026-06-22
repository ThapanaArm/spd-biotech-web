"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    setLoading(false);
    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      const d = await res.json().catch(() => ({}));
      setError(d.error || "เข้าสู่ระบบไม่สำเร็จ");
    }
  }

  return (
    <div className="admin-login">
      <form className="login-card" onSubmit={onSubmit}>
        <h1>
          SPD<span style={{ color: "var(--primary)" }}> Biotech</span>
        </h1>
        <p className="sub">เข้าสู่ระบบหลังบ้าน (Back office)</p>

        {error && <div className="form-error">{error}</div>}

        <div className="field">
          <label htmlFor="u">ชื่อผู้ใช้</label>
          <input
            id="u"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="p">รหัสผ่าน</label>
          <input
            id="p"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        <button
          className="btn btn-primary btn-block btn-lg"
          type="submit"
          disabled={loading}
        >
          {loading ? "กำลังเข้าสู่ระบบ…" : "เข้าสู่ระบบ"}
        </button>
      </form>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteButton({
  endpoint,
  name,
}: {
  endpoint: string;
  name: string;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function del() {
    if (!window.confirm(`ลบ "${name}" ?\nการลบนี้ไม่สามารถย้อนกลับได้`)) return;
    setBusy(true);
    const res = await fetch(endpoint, { method: "DELETE" });
    setBusy(false);
    if (res.ok) {
      router.refresh();
    } else {
      const d = await res.json().catch(() => ({}));
      alert(d.error || "ลบไม่สำเร็จ");
    }
  }

  return (
    <button className="btn btn-danger btn-sm" onClick={del} disabled={busy}>
      {busy ? "…" : "ลบ"}
    </button>
  );
}

import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase";
import { getSession } from "@/lib/session";

export async function POST(req: Request) {
  if (!(await getSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  for (const field of ["id", "name", "category"]) {
    if (!body[field] || typeof body[field] !== "string") {
      return NextResponse.json(
        { error: `กรุณากรอก "${field}"` },
        { status: 400 }
      );
    }
  }

  const row = {
    id: String(body.id).trim(),
    name: body.name,
    name_en: body.nameEn || null,
    brand: body.brand || null,
    category: body.category,
    tone: body.tone || "device",
    icon: body.icon || "📦",
    image: body.image || null,
    tagline: body.tagline || null,
    description: body.description || null,
    specs: Array.isArray(body.specs) ? body.specs : [],
    sort_order: Number.isFinite(Number(body.sortOrder)) ? Number(body.sortOrder) : 0,
  };

  try {
    const sb = createAdminClient();
    const { error } = await sb.from("products").insert(row);
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Server error" },
      { status: 500 }
    );
  }
}

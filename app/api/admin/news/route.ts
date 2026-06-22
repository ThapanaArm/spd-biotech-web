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

  for (const field of ["slug", "title", "category", "date"]) {
    if (!body[field] || typeof body[field] !== "string") {
      return NextResponse.json(
        { error: `กรุณากรอก "${field}"` },
        { status: 400 }
      );
    }
  }

  const row = {
    slug: String(body.slug).trim(),
    category: body.category,
    date: body.date,
    title: body.title,
    excerpt: body.excerpt || null,
    icon: body.icon || "📰",
    accent: body.accent || "green",
    sort_order: Number.isFinite(Number(body.sortOrder)) ? Number(body.sortOrder) : 0,
  };

  try {
    const sb = createAdminClient();
    const { error } = await sb.from("news").insert(row);
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Server error" },
      { status: 500 }
    );
  }
}

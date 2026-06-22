import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase";
import { getSession } from "@/lib/session";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await getSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const update = {
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
    updated_at: new Date().toISOString(),
  };

  try {
    const sb = createAdminClient();
    const { error } = await sb.from("products").update(update).eq("id", id);
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await getSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  try {
    const sb = createAdminClient();
    const { error } = await sb.from("products").delete().eq("id", id);
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Server error" },
      { status: 500 }
    );
  }
}

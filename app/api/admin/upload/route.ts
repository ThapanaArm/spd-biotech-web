import { NextResponse } from "next/server";
import { createAdminClient, PRODUCT_IMAGE_BUCKET } from "@/lib/supabase";
import { getSession } from "@/lib/session";

export async function POST(req: Request) {
  if (!(await getSession())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const file = form.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "ไม่พบไฟล์รูป" }, { status: 400 });
  }
  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "ไฟล์ต้องเป็นรูปภาพ" }, { status: 400 });
  }

  const ext = (file.name.split(".").pop() || "bin").toLowerCase();
  const objectName = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

  try {
    const sb = createAdminClient();
    const bytes = new Uint8Array(await file.arrayBuffer());
    const { error } = await sb.storage
      .from(PRODUCT_IMAGE_BUCKET)
      .upload(objectName, bytes, {
        contentType: file.type,
        upsert: false,
      });
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    const { data } = sb.storage.from(PRODUCT_IMAGE_BUCKET).getPublicUrl(objectName);
    return NextResponse.json({ url: data.publicUrl });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Server error" },
      { status: 500 }
    );
  }
}

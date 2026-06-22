import { notFound } from "next/navigation";
import NewsForm from "../NewsForm";
import { getNewsItem } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function EditNewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await getNewsItem(id);
  if (!item) notFound();

  return (
    <>
      <div className="admin-topbar">
        <h1 className="admin-h1">แก้ไขข่าว / บทความ</h1>
      </div>
      <NewsForm item={item} />
    </>
  );
}

import { notFound } from "next/navigation";
import ProductForm from "../ProductForm";
import { getProduct } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) notFound();

  return (
    <>
      <div className="admin-topbar">
        <h1 className="admin-h1">แก้ไขสินค้า</h1>
      </div>
      <ProductForm product={product} />
    </>
  );
}

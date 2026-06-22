import ProductForm from "../ProductForm";

export default function NewProductPage() {
  return (
    <>
      <div className="admin-topbar">
        <h1 className="admin-h1">เพิ่มสินค้า</h1>
      </div>
      <ProductForm />
    </>
  );
}

import NewsForm from "../NewsForm";

export default function NewNewsPage() {
  return (
    <>
      <div className="admin-topbar">
        <h1 className="admin-h1">เพิ่มข่าว / บทความ</h1>
      </div>
      <NewsForm />
    </>
  );
}

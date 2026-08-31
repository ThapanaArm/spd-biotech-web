import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import CatalogBrowser from "./CatalogBrowser";
import { getProducts } from "@/lib/data";

export const dynamic = "force-dynamic";
export const metadata = { title: "สินค้า — SPD Biotech" };

export default async function ProductCatalogPage() {
  const products = await getProducts();

  return (
    <>
      <Navbar />
      <main className="catalog">
        <div className="container">
          <CatalogBrowser products={products} />
        </div>
      </main>
      <Footer />
    </>
  );
}

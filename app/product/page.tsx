import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import CatalogBrowser from "./CatalogBrowser";
import { PRODUCT_CATEGORIES } from "@/lib/catalog";
import { getProducts } from "@/lib/data";

export const dynamic = "force-dynamic";
export const metadata = { title: "สินค้า — SPD Biotech" };

export default async function ProductCatalogPage() {
  const products = await getProducts();

  const known = PRODUCT_CATEGORIES as readonly string[];
  const present = [...new Set(products.map((p) => p.category))];
  const orderedCats = [
    ...known.filter((c) => present.includes(c)),
    ...present.filter((c) => !known.includes(c)),
  ];

  return (
    <>
      <Navbar />
      <main className="catalog">
        <div className="container">
          <CatalogBrowser products={products} categories={orderedCats} />
        </div>
      </main>
      <Footer />
    </>
  );
}

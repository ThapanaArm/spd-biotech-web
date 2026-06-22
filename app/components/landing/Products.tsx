import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/lib/catalog";
import { getProducts } from "@/lib/data";
import ProductThumb from "./ProductThumb";

export default async function Products() {
  const products = await getProducts();

  // Order known categories first, then any extra categories found in the data.
  const known = PRODUCT_CATEGORIES as readonly string[];
  const extras = [...new Set(products.map((p) => p.category))].filter(
    (c) => !known.includes(c)
  );
  const categories = [...known, ...extras];

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Featured products</span>
          <h2>สินค้าแนะนำ</h2>
          <p>
            A selection of the equipment and consumables we supply for sterile and
            biopharmaceutical processing — grouped by category.
          </p>
        </div>

        {categories.map((category) => {
          const items = products.filter((p) => p.category === category);
          if (items.length === 0) return null;
          return (
            <div className="product-group" key={category}>
              <h3 className="product-group-title">
                {category}
                <span className="count">({items.length})</span>
              </h3>
              <div className="products-grid">
                {items.map((p) => (
                  <Link className="product-card" href={`/product/${p.id}`} key={p.id}>
                    <ProductThumb product={p} />
                    <div className="product-body">
                      <h3>{p.name}</h3>
                      {p.nameEn && <p className="product-sub">{p.nameEn}</p>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

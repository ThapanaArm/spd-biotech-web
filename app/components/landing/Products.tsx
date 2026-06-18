import { PRODUCTS } from "@/lib/catalog";
import ProductThumb from "./ProductThumb";

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Featured products</span>
          <h2>สินค้าแนะนำ</h2>
          <p>
            A selection of the equipment and consumables we supply for sterile and
            biopharmaceutical processing.
          </p>
        </div>
        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <article className="product-card" key={p.id}>
              <ProductThumb product={p} />
              <div className="product-body">
                <h3>{p.name}</h3>
                {p.nameEn && <p className="product-sub">{p.nameEn}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

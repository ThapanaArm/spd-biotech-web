"use client";

import { useState } from "react";
import type { Product } from "@/lib/catalog";

/**
 * Product thumbnail. Shows the real photo when `image` is set and loads
 * successfully; otherwise falls back to the tinted icon placeholder. This
 * makes it safe to reference a photo path before the file actually exists.
 */
export default function ProductThumb({ product }: { product: Product }) {
  const [imgOk, setImgOk] = useState(true);
  const showImage = Boolean(product.image) && imgOk;

  return (
    <div className={"product-thumb " + (showImage ? "photo" : product.tone)}>
      {product.brand && <span className="product-brand">{product.brand}</span>}
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={product.image}
          alt={product.nameEn ?? product.name}
          className="product-img"
          loading="lazy"
          onError={() => setImgOk(false)}
        />
      ) : (
        <span className="product-emoji" aria-hidden="true">
          {product.icon}
        </span>
      )}
    </div>
  );
}

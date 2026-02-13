import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <h2>No products available at the moment.</h2>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

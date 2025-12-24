import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className={`card ${!product.inStock ? "out-of-stock" : ""}`}>
      
      {product.isFeatured && (
        <span className="featured">Featured</span>
      )}

      {!product.inStock && (
        <span className="badge">Out of Stock</span>
      )}

      {product.image && (
        <img src={product.image} alt={product.name} />
      )}

      <h3>{product.name}</h3>
      <p>${product.price}</p>

      {product.price > 100 && (
        <p className="premium">Premium Product</p>
      )}
    </div>
  );
}

export default ProductCard;

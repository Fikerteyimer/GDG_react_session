import React from "react";
import ProductList from "./ProductList";
import products from "./products";

function App() {
  return (
    <div className="app">
      <h1>Product Store</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;

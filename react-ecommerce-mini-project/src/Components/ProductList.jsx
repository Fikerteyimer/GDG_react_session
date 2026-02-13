import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="products-container">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;

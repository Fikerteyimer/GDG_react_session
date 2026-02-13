import { useState } from "react";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import "./App.css";
import headphone from "./assets/headphone.jpg";
import shoes from "./assets/shoes.jpg";
import watch from "./assets/watch.jpg";


function App() {

  const products = [
    {
      id: 1,
      name: "Headphones",
      price: 50,
      image:{headphone}
    },
    {
      id: 2,
      name: "Shoes",
      price: 80,
      image: {shoes}
    },
    {
      id: 3,
      name: "Watch",
      price: 120,
      image:{watch}
    }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find(item => item.id === product.id);

    if (exist) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const changeQty = (id, type) => {
    setCart(
      cart
        .map(item =>
          item.id === id
            ? { ...item, qty: type === "inc" ? item.qty + 1 : item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    );
  };

  return (
    <div>
      <h1 className="title">Shopping Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} changeQty={changeQty} />
    </div>
  );
}

export default App;

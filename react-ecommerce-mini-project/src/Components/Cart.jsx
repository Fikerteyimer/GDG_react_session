const Cart = ({ cart, removeFromCart, changeQty }) => {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return <p className="empty">🛒 Your cart is empty</p>;
  }

  return (
    <div className="cart-container">
      <h2>Cart</h2>

      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <h4>{item.name}</h4>

          <div>
            <button className="qty-btn" onClick={() => changeQty(item.id, "dec")}>−</button>
            {item.qty}
            <button className="qty-btn" onClick={() => changeQty(item.id, "inc")}>+</button>
          </div>

          <p>${item.price * item.qty}</p>

          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <div className="total">Total: ${total}</div>
    </div>
  );
};

export default Cart;

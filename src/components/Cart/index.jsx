import { useCart } from "../../context/CartContext";
import "./index.css";

export function Cart() {
  const { cart, updateCartQuantity } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-image" />
              <div className="cart-details">
                <div className="cart-category">{item.category}</div>
                <h4 className="cart-title">{item.title}</h4>
                <div className="cart-price">${(item.price*item.quantity).toFixed(2)}</div>
                <div className="cart-quantity">
                  <button onClick={() => updateCartQuantity(item.id, -1)} className="cart-btn">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateCartQuantity(item.id, 1)} className="cart-btn">+</button>
                </div>
              </div>
            </div>
          ))}
          {/* Display total price at the bottom */}
          <div className="cart-total">
            <h1>Total: ${totalPrice}</h1>
          </div>
        </div>
      )}
    </div>
  );
}

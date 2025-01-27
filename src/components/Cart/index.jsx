import "./index.css";

export function Cart({ cart, onUpdateQuantity }) {
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
                <div className="cart-price">${item.price}</div>
                <div className="cart-quantity">
                  <button
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="cart-btn"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="cart-btn"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

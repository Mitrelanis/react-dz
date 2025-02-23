import { useCart } from "../../context/CartContext";
import "./index.css"

export function ProductCard({ data }) {
  const { cart, addToCart, updateCartQuantity } = useCart();
  const { image, category, title, price, id } = data;

  const cartItem = cart.find((item) => item.id === id);
  const cartQuantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="image" />
      <div className="category-name">
        <div className="category">{category}</div>
        <h4>{title}</h4>
      </div>
      <div className="pricediv">
        <div className="price">${price}</div>
        {cartQuantity > 0 ? (
          <div className="quantity-controls">
            <button onClick={() => updateCartQuantity(id, -1)}>-</button>
            <span>{cartQuantity}</span>
            <button onClick={() => updateCartQuantity(id, 1)}>+</button>
          </div>
        ) : (
          <button onClick={() => addToCart(data)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
}

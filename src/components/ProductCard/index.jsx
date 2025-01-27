import "./index.css";

export function ProductCard({ data, onAddToCart, cartQuantity, onUpdateCartQuantity }) {
  const { image, category, title, price } = data;

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
            <button onClick={() => onUpdateCartQuantity(data.id, -1)}>-</button>
            <span>{cartQuantity}</span>
            <button onClick={() => onUpdateCartQuantity(data.id, 1)}>+</button>
          </div>
        ) : (
          <button onClick={onAddToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
}

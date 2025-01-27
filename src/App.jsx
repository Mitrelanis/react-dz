import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { FilterButtons } from "./components/FilterButtons";
import { Spinner } from "./components/Spinner";
import { Cart } from "./components/Cart";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setFilteredProducts(json);
        const uniqueCategories = [
          "all",
          ...new Set(json.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);
      })
      .finally(() => setLoading(false));
  }, []);

  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateCartQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="main">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <FilterButtons
            categories={categories}
            activeCategory={activeCategory}
            onFilter={filterByCategory}
          />
          <div className="wrap">
            {filteredProducts.map((product) => {
              const cartItem = cart.find((item) => item.id === product.id);
              const cartQuantity = cartItem ? cartItem.quantity : 0;

              return (
                <ProductCard
                  key={product.id}
                  data={product}
                  cartQuantity={cartQuantity}
                  onAddToCart={() => addToCart(product)}
                  onUpdateCartQuantity={updateCartQuantity}
                />
              );
            })}
          </div>
          <Cart cart={cart} onUpdateQuantity={updateCartQuantity} />
        </>
      )}
    </div>
  );
}

export default App;

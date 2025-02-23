import { useEffect, useState } from "react";
import { ProductCard } from "./components/ProductCard";
import { FilterButtons } from "./components/FilterButtons";
import { Spinner } from "./components/Spinner";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setFilteredProducts(json);
        const uniqueCategories = ["all", ...new Set(json.map((p) => p.category))];
        setCategories(uniqueCategories);
      })
      .finally(() => setLoading(false));
  }, []);

  const filterByCategory = (category) => {
    setActiveCategory(category);
    setFilteredProducts(category === "all" ? products : products.filter((p) => p.category === category));
  };

  return (
    <CartProvider>
      <div className="main">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <FilterButtons categories={categories} activeCategory={activeCategory} onFilter={filterByCategory} />
            <div className="wrap">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
            <Cart />
          </>
        )}
      </div>
    </CartProvider>
  );
}

export default App;

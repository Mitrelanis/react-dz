import "./index.css";

export function FilterButtons({ categories, activeCategory, onFilter }) {
  return (
    <div className="filter-buttons">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-button ${
            activeCategory === category ? "active" : ""
          }`}
          onClick={() => onFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

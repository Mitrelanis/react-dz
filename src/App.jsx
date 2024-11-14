import { ProductCard } from "./components";
import "./index.css"

const products = [
  {id:0,
    name:"Product 1",
    category:"Category 1",
    price:200, 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLO5zs_lgNCN3s9_qkZibzcpE5s1M7G-gKg&s"
  },
  {id:0,
    name:"Product 2",
    category:"Category 2",
    price:200, 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLO5zs_lgNCN3s9_qkZibzcpE5s1M7G-gKg&s"
  },
  {id:0,
    name:"Product 2",
    category:"Category 2",
    price:200, 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLO5zs_lgNCN3s9_qkZibzcpE5s1M7G-gKg&s"
  },
  {id:0,
    name:"Product 2",
    category:"Category 2",
    price:200, 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLO5zs_lgNCN3s9_qkZibzcpE5s1M7G-gKg&s"
  },
  {id:0,
    name:"Product 2",
    category:"Category 2",
    price:200, 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLO5zs_lgNCN3s9_qkZibzcpE5s1M7G-gKg&s"
  },
  {id:0,
    name:"Product 2",
    category:"Category 2",
    price:200, 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLO5zs_lgNCN3s9_qkZibzcpE5s1M7G-gKg&s"
  },
  {id:0,
    name:"Product 2",
    category:"Category 2",
    price:200, 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLO5zs_lgNCN3s9_qkZibzcpE5s1M7G-gKg&s"
  },
  {id:0,
    name:"Product 2",
    category:"Category 2",
    price:200, 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLO5zs_lgNCN3s9_qkZibzcpE5s1M7G-gKg&s"
  },
  {id:0,
    name:"Product 2",
    category:"Category 2",
    price:200, 
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLLO5zs_lgNCN3s9_qkZibzcpE5s1M7G-gKg&s"
  },

]

function App() {
  return (
    <div className="main">
      {
      products.map((product) => <ProductCard data={product}/>)
      }
    </div>
  );
}

export default App;

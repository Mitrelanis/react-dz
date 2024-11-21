import "./index.css"

export function ProductCard(props){
    const {image, category, title, price} = props.data;

    return (<div className="product-card">
   
        <img src={image} alt="" className="image"/>
        <div className="category-name">
        <div className="category">{category}</div>
        <h4>{title}</h4>
        </div>
        <div className="pricediv">
            <div className="price">${price}</div>
            <button>Add to card</button>
        </div>
    </div>)
}
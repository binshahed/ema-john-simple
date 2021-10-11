import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { name, price, seller, stock, img } = props.product;
  return (
    <div>
      <div className="product-container">
        <div className="image-container">
          <img src={img} alt="product img" />
        </div>
        <div className="product-body-container">
          <h3>name: {name}</h3>
          <p>
            <small>by: {seller}</small>
          </p>
          <p>${price}</p>
          <p>only {stock} left in stock - order soon</p>
          <button onClick={() => props.handleAddToCart(props.product)}>
            <FontAwesomeIcon icon={faShoppingCart} /> add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

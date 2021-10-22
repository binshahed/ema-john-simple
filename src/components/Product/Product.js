import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import Rating from "react-rating";

const Product = (props) => {
  const { name, price, seller, stock, img, star, key } = props.product;
  return (
    <div>
      <div className="product-container">
        {props.image ? (
          <div className="image-container">
            <img src={img} alt="product img" />
          </div>
        ) : (
          ""
        )}
        <div className="product-body-container">
          <h3> {name}</h3>
          <p>
            <small>by: {seller}</small>
          </p>
          <p>${price}</p>
          <Rating
            initialRating={star}
            style={{ color: "goldenrod", fontSize: "10px" }}
            emptySymbol="far fa-star fa-2x"
            fullSymbol="fas fa-star fa-2x"
            readonly
          />
          {props.quantity ? (
            <p>quantity: {props.product.quantity} </p>
          ) : (
            <p>only {stock} left in stock - order soon</p>
          )}
          {props.handleAddToCart ? (
            <button onClick={() => props.handleAddToCart(props.product)}>
              <FontAwesomeIcon icon={faShoppingCart} /> add to cart
            </button>
          ) : (
            <button onClick={() => props.handleRemoveProduct(key)}>
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

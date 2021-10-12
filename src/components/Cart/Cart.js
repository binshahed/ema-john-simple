import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;

  let totalPrice = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
  }

  return (
    <div className="my-cart">
      <h3>Order Summary</h3>
      <h4>Items ordered: {props.cart.length}</h4>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
};

export default Cart;

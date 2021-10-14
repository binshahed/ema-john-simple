import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;

  let totalPrice = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    totalQuantity = totalQuantity + product.quantity;

    totalPrice = totalPrice + product.price * product.quantity;
  }

  return (
    <div className="my-cart">
      <h3>Order Summary</h3>
      <h4>Items ordered: {totalQuantity}</h4>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
};

export default Cart;

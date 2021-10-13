import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  console.log(cart);

  let totalPrice = 0;
  let totalProduct = 0;
  for (const product of cart) {
    if (!product.length) {
      product.length = 1;
    }
    totalProduct = totalProduct + product.length;

    totalPrice = totalPrice + product.price * product.length;
    console.log(totalPrice);
  }

  return (
    <div className="my-cart">
      <h3>Order Summary</h3>
      <h4>Items ordered: {totalProduct}</h4>
      <p>Total Price: {totalPrice}</p>
    </div>
  );
};

export default Cart;

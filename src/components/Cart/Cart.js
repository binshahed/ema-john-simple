import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  console.log(cart);

  let total = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    totalQuantity = totalQuantity + product.quantity;

    total = total + product.price * product.quantity;
  }
  const shipping = total > 0 ? 15 : 0;
  const tax = (shipping + total) * 0.12;
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <div className="order-title">
        <h3>Order Summary</h3>
        <p>
          Items ordered:<span className="cart-amount"> {totalQuantity}</span>
        </p>
      </div>

      <table className="cart-table">
        <tbody>
          <tr>
            <td>Items:</td>
            <td>${total.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Shipping & Handling:</td>
            <td>${shipping}</td>
          </tr>
          <tr>
            <td>Estimated Tax:</td>
            <td>${tax.toFixed(2)}</td>
          </tr>
          <tr className="grand-total">
            <td>Grand Total:</td>
            <td>${grandTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className="btn-container">
        <button className="review-btn">Review your order</button>
      </div>
    </div>
  );
};

export default Cart;

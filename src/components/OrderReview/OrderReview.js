import React from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProducts";
import { deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Review = () => {
  const [products, setProducts] = useProduct([]);
  const [cart, setCart] = useCart(products);

  const handleRemoveProduct = (id) => {
    const newProducts = cart.filter((product) => product.key !== id);
    deleteFromDb(id);
    setCart(newProducts);
  };

  return (
    <div className="container">
      <div className="products-container">
        {cart.map((product) => (
          <Product
            quantity
            handleRemoveProduct={handleRemoveProduct}
            key={product.key}
            product={product}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Review;

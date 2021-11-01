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
     <div className="row">
     <div className="products-container col-8">
        {cart.map((product) => (
          <Product
            quantity
            handleRemoveProduct={handleRemoveProduct}
            key={product.key}
            product={product}
          />
        ))}
      </div>
      <div className="cart-container col-4">
        <Cart cart={cart} setProducts={setProducts} />
      </div>
     </div>
    </div>
  );
};

export default Review;

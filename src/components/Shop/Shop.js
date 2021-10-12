import { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const getKeyLSG = getStoredCart();
    console.log(getKeyLSG);
    const cartProduct = [];
    for (const key in getKeyLSG) {
      // console.log(key, (getKeyLSG.key = getKeyLSG[key]));
      // console.log(key, getKeyLSG[key]);
      const newProduct = products.find((product) => product.key === key);
      const addLength = (newProduct.newLength = getKeyLSG[key]);
      console.log(addLength);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
  };

  return (
    <div>
      <div className="container">
        <div className="products-container">
          {products.map((product) => (
            <Product
              product={product}
              key={product.key}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;

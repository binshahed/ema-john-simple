import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saveCart = getStoredCart();
    const keys = Object.keys(saveCart);

    fetch("http://localhost:5000/products/byKeys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        if (products.length) {
          const storedCart = [];
          for (const key in saveCart) {
            const addedProduct = products.find(
              (product) => product.key === key
            );
            if (addedProduct) {
              const quantity = saveCart[key];
              addedProduct.quantity = quantity;
              storedCart.push(addedProduct);
            }
          }
          setCart(storedCart);
        }
      });
  }, []);
  return [cart, setCart];
};

export default useCart;

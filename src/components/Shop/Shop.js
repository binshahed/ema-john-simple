import { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSearchProduct(data);
      });
  }, []);

  useEffect(() => {
    if (products.length) {
      const saveCart = getStoredCart();
      const storedCart = [];
      for (const key in saveCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = saveCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const sameProduct = cart.find((x) => x.key === product.key);
    let newCart;
    if (sameProduct) {
      sameProduct.quantity = sameProduct.quantity + 1;
      const others = cart.filter((x) => x.key !== product.key);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.key);
  };

  const handleSearchProduct = (event) => {
    const searchText = event.target.value;
    const matchedProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchProduct(matchedProduct);
  };

  return (
    <>
      <div className="search-container">
        <input
          onChange={handleSearchProduct}
          placeholder="Search your Product"
        />
        <FontAwesomeIcon
          style={{ color: "#fff", margin: " 0 5px 0 20px" }}
          icon={faShoppingCart}
        />
        <span style={{ color: "goldenrod" }}>{cart.length}</span>
      </div>
      <div className="container">
        <div className="row">
        <div className="products-container col-8">
          {searchProduct.map((product) => (
            <Product
              image
              product={product}
              key={product.key}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="cart-container col-4">
          <Cart shop cart={cart}  />
        </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

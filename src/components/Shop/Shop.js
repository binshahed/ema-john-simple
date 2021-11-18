import { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProducts";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [searchProduct, setSearchProduct] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const size = 10;
  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setSearchProduct(data.products);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

  const handleAddToCart = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    // save to local storage (for now)
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
            <div className="pagination">
              {[...Array(pageCount).keys()].map((pageNo) => (
                <button
                  key={pageNo}
                  onClick={() => setPage(pageNo)}
                  className={pageNo !== page ? "btn btn-dark" : "btn"}
                >
                  {pageNo + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="cart-container col-4">
            <Cart shop cart={cart} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

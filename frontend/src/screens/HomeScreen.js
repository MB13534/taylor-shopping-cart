import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./HomeScreen.css";
import Product from "../components/Product";
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  //need to add proxy to package.json "proxy": "http://127.0.0.1:3001",
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {/* check to make sure the async action to load all the items is complete */}
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              brand={product.brand}
              nwt={product.nwt}
              name={product.name}
              price={product.price}
              size={product.size}
              imageUrl={product.images[0]}
              productId={product._id}
              subCategory={product.subCategory}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;

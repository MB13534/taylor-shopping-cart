import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ProductScreen.css";
import ImageCarousel from "../components/ImageCarousel";
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    //if the id in the url param is in state
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);
  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <ImageCarousel images={product.images} />
            </div>

            <div className="left__info">
              <p className="left__name">{product.name}</p>

              <div className="left__brand-container">
                <p className="left__brand">{product.brand}</p>
                {product.nwt && <p className="info__nwt">NWT</p>}
              </div>

              <div className="left__price-container">
                <p className="left__price">${product.price}</p>
                <p className="left__size">
                  Size<span>{product.size}</span>
                </p>
              </div>
              <p className="left__description">{product.description}</p>
              <div className="left__sex-container">
                <p className="left__sex">{product.sex}</p>
                <p className="left__category">{product.category}</p>
                {product.subCategory && (
                  <p className="left__subCategory">{product.subCategory}</p>
                )}
              </div>

              <div className="left__color-container">
                <p className="left__color">{product.color}</p>
                {product.subColor && (
                  <p className="left__subCategory">{product.subColor}</p>
                )}
              </div>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price: <span>$420.19</span>
              </p>
              <p>
                Status: <span>In Stock</span>
              </p>

              <p>
                <button type="button">Add to Cart</button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;

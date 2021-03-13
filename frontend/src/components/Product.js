import { Link } from "react-router-dom";

import "./Product.css";

const Product = ({
  brand,
  nwt,
  name,
  price,
  size,
  imageUrl,
  productId,
  subCategory,
}) => {
  return (
    <div className="product-container">
      <Link to={`/product/${productId}`}>
        <div className="product">
          <img src={imageUrl} alt={name} />
          <div className="product__info">
            <div className="brand-container">
              <p className="info__brand">{brand}</p>
              {/* if nwt is true */}
              {nwt && <p className="info__nwt">NWT</p>}
            </div>

            <p className="info__name">
              {name}
              {/* {name.substring(0, 100)}... */}
            </p>
            <div className="price-container">
              <p className="info__price">${price}</p>
              <p className="info__size">
                Size<span>{size}</span>
              </p>
            </div>

            <div className="info__button">View</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;

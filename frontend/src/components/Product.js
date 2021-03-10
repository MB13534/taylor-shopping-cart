import { Link } from "react-router-dom";

import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <img
        src="https://di2ponv0v5otw.cloudfront.net/posts/2021/01/16/6003b6a01801365fdb342deb/m_6003b6d8275e555fdcc445bb.jpg"
        alt="Product Name"
      />
      <div className="product__info">
        <p className="info__name">Product1</p>
        <p className="info__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          varius consectetur justo sit amet sagittis.
        </p>
        <p className="info__price">$412.99</p>

        <Link to={`/product/${1234}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;

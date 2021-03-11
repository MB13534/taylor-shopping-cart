import { Link } from "react-router-dom";

import "./Product.css";

const Product = () => {
  return (
    <Link to={`/product/${1234}`}>
      <div className="product">
        <img
          src="https://di2ponv0v5otw.cloudfront.net/posts/2021/01/16/6003b6a01801365fdb342deb/m_6003b6d8275e555fdcc445bb.jpg"
          alt="Product Name"
        />
        <div className="product__info">
          <p className="info__brand">
            Hermès<span>NWT</span>
          </p>
          <p className="info__name">
            Hermès Paris Printed sweater dress grey size 36
          </p>
          <div className="bottom-container">
            <p className="info__price">$385</p>
            <p className="info__size">
              Size<span>4</span>
            </p>
          </div>

          <div className="info__button">View</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;

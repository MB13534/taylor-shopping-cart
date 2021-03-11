import "./CartItem.css";

import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img
          src="https://di2ponv0v5otw.cloudfront.net/posts/2021/01/17/60049f86ff8304435db7b04d/m_60049fe2045e39c31e8afcd9.jpg"
          alt="product name"
        />
      </div>
      <Link to={`/product/${1234}`} className="cartitem__name">
        <p>Hermès Paris Printed sweater dress grey size 36</p>
      </Link>

      <p className="cartitem__size">
        size <span>4</span>
      </p>
      <p className="cartitem__price">$420</p>

      <button className="cartitem__deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;

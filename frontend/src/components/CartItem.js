import "./CartItem.css";

import { Link } from "react-router-dom";

const CartItem = ({ item, removeHandler }) => {
  const { images, name, size, price, product } = item;
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={images[0]} alt={name} />
      </div>
      <Link to={`/product/${product}`} className="cartitem__name">
        <p>{name}</p>
      </Link>

      <p className="cartitem__size">
        size <span>{size}</span>
      </p>
      <p className="cartitem__price">${price}</p>

      <button
        className="cartitem__deleteBtn"
        onClick={() => removeHandler(product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./CartScreen.css";
import CartItem from "../components/CartItem";
import { removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <>
      <h2 className="title">Shopping Cart</h2>
      <div className="cartscreen">
        <div className="cartscreen__left">
          {/* Link if the cart is empty, otherwise map through cartItems and render */}
          {cartItems.length === 0 ? (
            <div>
              Your cart is empty. <Link to="/">Head back to the closet</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                removeHandler={removeHandler}
              />
            ))
          )}
        </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            {/* toFixed makes the default return 0.00 and adds the 2 trailing zeros if necessary */}
            <p>${getCartSubTotal().toFixed(2)}</p>
          </div>
          <div>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;

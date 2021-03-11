import "./CartScreen.css";
import CartItem from "../components/CartItem";

const CartScreen = () => {
  return (
    <>
      <h2 className="title">Shopping Cart</h2>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal (0) items</p>
            <p>$420</p>
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

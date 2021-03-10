// import React from 'react'
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ click }) => {
  return (
    <div className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>Tailored by Tay - Shopping Cart</h2>
      </div>

      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;

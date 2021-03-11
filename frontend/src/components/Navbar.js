// import React from 'react'
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ click }) => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        {/* logo */}
        <div className="navbar__logo">
          <Link to="/" className="navbar__link">
            <h2>
              <span>Tailored by Tay</span>Shopping
            </h2>
          </Link>
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
            <Link to="/" className="navbar__link">
              Shop
            </Link>
          </li>
        </ul>

        {/* hamburger menu */}
        <div className="hamburger__menu" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

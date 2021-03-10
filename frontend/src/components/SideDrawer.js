import { Link } from "react-router-dom";

import "./SideDrawer.css";

const SideDrawer = ({ show, click }) => {
  //display sidedrawer if sideToggle is false
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/cart" className="item">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="sidedrawer__cartbadge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;

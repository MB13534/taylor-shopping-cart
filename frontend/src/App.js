import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";

//screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

//components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/taylor-shopping-cart/" component={HomeScreen} />
          <Route
            exact
            path="/taylor-shopping-cart/product/:id"
            component={ProductScreen}
          />
          <Route
            exact
            path="/taylor-shopping-cart/cart"
            component={CartScreen}
          />
        </Switch>
      </main>
    </Router>
  );
}

export default App;

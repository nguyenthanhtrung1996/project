import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import Products from "./components/Products";
import { CartProvider } from "./context/Cart";
const Index = () => <h2>Home</h2>;

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <div className="Header">
            <NavBar />
            <Route path="/" exact component={Index}></Route>
            <Route path="/Products/" component={Products}></Route>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { CartContext } from "../context/Cart";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Discovery</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>
              <Link to="/">Home</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/Products/">Products</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <CartContext.Consumer>
                {({ Cart }) => (
                  <Link to="/Products/">Cart ({Cart.length})</Link>
                )}
              </CartContext.Consumer>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;

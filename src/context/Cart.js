import React, { Component } from "react";

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CartItem: []
    };
    this.updateCart = this.updateCart.bind(this);
  }
  updateCart = (product) => {
    this.setState({
      CartItem: this.state.CartItem.concat(product)
    });
  };
  render() {
    return (
      <CartContext.Provider
        value={{
          Cart: this.state.CartItem,
          updateCart: this.updateCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

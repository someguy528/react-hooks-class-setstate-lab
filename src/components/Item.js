import React, { useState } from "react";

class Item extends React.Component {
  // const [isInCart, setIsInCart] = useState(false);
  state = {
    isInCart: false
  }

  handleAddToCartClick = () => {
    // setIsInCart((isInCart) => !isInCart);
    this.setState((currentState) => ({
      isInCart: !currentState.isInCart
    }))
  }

  render(){
  return (
    <li className={this.state.isInCart ? "in-cart" : ""}>
      <span>{this.props.name}</span>
      <span className="category">{this.props.category}</span>
      <button
        className={this.state.isInCart ? "remove" : "add"}
        onClick={this.handleAddToCartClick}
      >
        {this.state.isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  )};
}

export default Item;

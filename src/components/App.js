import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { render } from "react-dom";

class App extends React.Component {
  // const [items, setItems] = useState(itemData);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  state = {
    items: itemData,
    isDarkMode: false
  }


  handleDarkModeClick = () => {
    // setIsDarkMode((isDarkMode) => !isDarkMode);
    this.setState((currentState) => ({
      isDarkMode: !currentState.isDarkMode
    }))
  }

  render(){
  return (
    <div className={"App " + (this.state.isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={this.handleDarkModeClick}>
          {this.state.isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={this.state.items} />
    </div>
  )};
}

export default App;

import React, { Component } from 'react';
import List from "./List";
import GroceryForm from "./GroceryForm";
import './App.css';

class App extends Component {
  state = {
    grocerys: [
      { id: 1, name: "Milk", complete: true, },
      { id: 2, name: "Eggs", complete: false, },
      { id: 3, name: "Bread", complete: false, },
    ]
  };

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (name) => {
    const grocery = { id: this.getId(), name, complete: false, };
    this.setState({ grocerys: [grocery, ...this.state.grocerys] });
  }

  handleClick = (id) => {
    this.setState({
      grocerys: this.state.grocerys.map( grocery => {
        if (grocery.id === id) {
          return { ...grocery, complete: !grocery.complete, }
        }
        return grocery;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <GroceryForm addItemFunction={this.addItem} />
        <List name="Grocery List" items={this.state.grocerys} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
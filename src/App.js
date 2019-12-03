import React, { Component, } from 'react';
import List from "./List";
import ShoppingForm from './ShoppingForm'

class App extends Component {
  state = {
    shoppingLists: [
      { id: 1, name: "Milk", complete: true, },
      { id: 2, name: "Whiskey", complete: false, },
      { id: 3, name: "Beans", complete: false, },
    ]
  };

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

   addItem = (name) => {
     const { shoppingLists } = this.state;
     const shoppingList = { name, id: this.getUniqId(), complete: false, };
     this.setState({ shoppingLists: [...shoppingLists, shoppingList]});
   }

   handleClick = (id) => {
    const { shoppingLists } = this.state;
    this.setState({
      shoppingLists: shoppingLists.map( shoppingList => {
        if (shoppingList.id === id) {
          return {
            ...shoppingList,
            complete: !shoppingList.complete
          }
        }
        return shoppingList
      })
    })
  }


  render() {
  const { shoppingLists } = this.state
  return (
    <div>
      < ShoppingForm addItem={this.addItem}/>
      <List name="Shopping List" items={shoppingLists} shoppingListClick={this.handleClick} />
    </div>
    );
  };
};

export default App;

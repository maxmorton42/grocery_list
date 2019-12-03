import React from "react";
import ShoppingList from "./ShoppingList"

const List = ({items, name, shoppingListClick}) => (
  <div>
    <h3>{name}</h3>
    <ul>
    { items.map( item => <ShoppingList key={item.id} {...item} shoppingListClick={shoppingListClick} /> )}
    </ul>
  </div>
);

export default List;
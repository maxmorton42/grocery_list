import React from 'react';

const ShoppingList = ({ id, name, complete, shoppingListClick }) => (
  <li
    style={ complete ? { ...styles.shoppingList, ...styles.complete } : styles.shoppingList }
    onClick={ () => shoppingListClick(id)}
  >
   { name }
  </li>
);

const styles = {
  shoppingList: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
};

export default ShoppingList;
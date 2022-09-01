import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function UserForm({list, updateList, removeCrossedItems}) {
  const [groceryItem, setGroceryItem] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit (event) {
    event.preventDefault()
    updateList(groceryItem, quantity)
    setGroceryItem("");
    setQuantity("");
  };

function handleAddItem(event) {
  setGroceryItem(event.target.value);
}

function handleAddQuantity(event) {
  setQuantity(event.target.value);
}

function handleDelete(event) {
  console.log('clicked delete')
  removeCrossedItems(list);
};

  return(
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="addItem" placeholder="Enter Item Name" value={groceryItem} onChange={handleAddItem} />
        <input type="text" name="addQuantity" placeholder="Enter Quantity" value={quantity} onChange={handleAddQuantity} />
      </label>
      <input type="submit" value="submit" className="submitButton"/>
      <button type="button" className="deleteButton" onClick={handleDelete}>Remove Items</button>
    </form>
  )

};

export default UserForm;

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function UserForm({list, updateList}) {
  const [groceryItem, setGroceryItem] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit (event) {
    event.preventDefault()
    updateList(groceryItem, quantity)
    setGroceryItem("");
    setQuantity("");
  };

function handleAddItem(event) {
  console.log('test')
  setGroceryItem(event.target.value);
}

function handleAddQuantity(event) {
  setQuantity(event.target.value);
}

  return(
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="addItem" placeholder="Enter Item Name" value={groceryItem} onChange={handleAddItem} />
        <input type="text" name="addQuantity" placeholder="Enter Quantity" value={quantity} onChange={handleAddQuantity} />
      </label>
      <input type="submit" value="submit" />
    </form>
  )

};

export default UserForm;

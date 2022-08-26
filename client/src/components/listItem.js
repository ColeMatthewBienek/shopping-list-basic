import React from 'react';

const ListItem = ({ item, index }) => {
  // let crossed = item.crossed ? "crossed-item" : "";
  function handleClick(event){

    let listCopy = [...list];
    let itemSelected = listCopy[index];
    if(itemSelected.isChecked) {
      console.log(itemSelected.item, "is checked")
    } else {
      console.log(itemSelected.item, "is not checked")
    }

    // var copy = [...list]
    // copy[index] =
    // get entire list from context
    // make copy of list and update the crossed field with the new value in the new list
    // setState with the new list copy with updated value
    // message server that this item is now crossed
  }
  return <li key={index} onClick={handleClick}>
          {item.item}: {item.qty}
         </li>
}

export default ListItem;
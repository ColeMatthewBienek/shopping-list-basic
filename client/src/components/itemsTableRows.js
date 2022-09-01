import React, { useEffect, useState } from 'react';

const ItemsTableRows = ({item, index, updateListWithStrike}) => {
  const strikeObj = {
    textDecoration: 'line-through'
  }

  function handleClick(event){
    updateListWithStrike(index, !item.isChecked);
  };

  return <tr key={index} onClick={handleClick}>
          <td style={item.isChecked ? strikeObj : null}>{item.groceryItem}</td>
          <td style={item.isChecked ? strikeObj : null}>{item.quantity}</td>
         </tr>
  };

export default ItemsTableRows;

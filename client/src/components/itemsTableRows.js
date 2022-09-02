import React, { useEffect, useState } from 'react';

const ItemsTableRows = ({item, index, updateListWithStrike}) => {
  console.log('item------------', item)
  const strikeObj = {
    textDecoration: 'line-through'
  }

  function handleClick(event){
    updateListWithStrike(index, !item.isChecked);
  };

  return <tr key={index} onClick={handleClick}>
          <td style={item.isChecked ? strikeObj : null}>{item.item}</td>
          <td style={item.isChecked ? strikeObj : null}>{item.qty}</td>
         </tr>
  };

export default ItemsTableRows;

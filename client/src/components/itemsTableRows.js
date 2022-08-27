import React, { useEffect, useState } from 'react';

const ItemsTableRows = ({item, index, updateListWithStrike}) => {


  const strikeObj = {
    textDecoration: 'line-through'
  }

  function handleClick(event){
    updateListWithStrike(index, !item.isCrossed);
  };

  return <tr key={index} onClick={handleClick}>
          <td style={item.isCrossed ? strikeObj : null}>{item.item}</td>
          <td style={item.isCrossed ? strikeObj : null}>{item.qty}</td>
         </tr>
  };

export default ItemsTableRows;

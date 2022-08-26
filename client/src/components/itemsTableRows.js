import React, { useState } from 'react';

const ItemsTableRows = ({item, index}) => {

  const [checked, setChecked] = useState(item.isChecked);

  function handleClick(event){


    if(item.isChecked) {
      console.log(item.item, "is checked")
    } else {

      console.log(event.target)
      event.target.style.setProperty('text-decoration', 'line-through');

    }
  };
  return <tr key={index} onClick={handleClick}>
          <td>{item.item}</td>
          <td>{item.qty}</td>
         </tr>
  };


export default ItemsTableRows;
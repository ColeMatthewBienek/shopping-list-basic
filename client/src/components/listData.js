import React, { useState, useEffect, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import data from '../../../data/data.js';

import ListItem from './listItem.js';
import UserForm from './userForm.js';
import ItemsTableRows from './ItemsTableRows.js';
import axios from 'axios';

function ListData() {
const [list, setList] = useState(data);
const [error, setError] = useState(false);

  const updateList = async (groceryItem, qty) => {
    const newItem = {
      item: groceryItem,
      qty: qty
    }

    setList([...list, newItem]) // DELETE ME AFTER SERVER ROUTE EXISTS


    // axios.put('/groceries', newItem)
    //   .then(() => {
    //     setList([...list, newItem])
    //     setError(false)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     setError(true)
    //   })
  }

  return (
      <div>
        <table>
          <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
          </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              return <ItemsTableRows key={index} item={item} index={index} />
            })}
          </tbody>
        </table>
        {/* <ul>
          {list.map((item, index) => {
            return <ListItem key={index} item={item} index={index} />
          })}
        </ul> */}
        <UserForm list={list} updateList={updateList}/>
        {error ? <p>Error writing to db</p> : null}
      </div>
  )
};

export default ListData;
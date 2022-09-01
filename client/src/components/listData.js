import React, { useState, useEffect, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
// import data from '../../../data/data.js';

import ListItem from './listItem.js';
import UserForm from './userForm.js';
import ItemsTableRows from './itemsTableRows.js';
import axios from 'axios';

function ListData() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const loadList = () => {
    axios.get('/allRecords')
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
  };

  useEffect(loadList,[]);

  const updateListWithStrike = async (index, strike) => {
      let affectedRecord;
      const updateStrike = list.map((ele, curIndex) => {
      if (curIndex === index) {
        affectedRecord = (strike) ? {...ele, isChecked: 1} : {...ele, isChecked: 0};
        return {...ele, isChecked: strike}
      }
      return ele;
    });
    axios.put('/updateStrikethrough', affectedRecord)
      .then(() => {
        setList(updateStrike);
      })
      .catch(err => {
        console.log(err)
      })
  };

  const removeCrossedItems = async (list) => {
    const filteredList = list.filter(item => item.isChecked === 0);

    axios.delete('/deleteRecords')
      .then(() => {
        setList(filteredList);
      })
      .catch(err => {
        console.log(err)
      })

  }

  const updateList = async (item, qty) => {
    const newItem = {
      groceryItem: item,
      quantity: qty,
      isChecked: 0
    }

    // setList([...list, newItem]) // DELETE ME AFTER SERVER ROUTE EXISTS

    axios.post('/addRecord', newItem)
      .then(() => {
        // console.log(response);
        // setList([...list, newItem])
        loadList();
        // setError(false)
      })
      .catch(err => {
        console.log(err)
        // setError(true)
      })
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
              return <ItemsTableRows key={index} updateListWithStrike={updateListWithStrike} item={item} index={index} />
            })}
          </tbody>
        </table>
        {/* <ul>
          {list.map((item, index) => {
            return <ListItem key={index} item={item} index={index} />
          })}
        </ul> */}
        <UserForm list={list} updateList={updateList} removeCrossedItems={removeCrossedItems}/>
        {error ? <p>Error writing to db</p> : null}
      </div>
  )
};

export default ListData;
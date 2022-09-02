const { db } = require('../mongoDatabase/mongo.js');
const { shoppingListModel } = require('../mongoDatabase/mongo.js');
const { shoppingListSchema } = require('../mongoDatabase/mongo.js');


let data = [
  {item: 'carrots', qty: 2, isChecked: false},
  {item: 'cheesecake', qty: 1, isChecked: false},
  {item: 'bubblewater', qty: 12, isChecked: false},
  {item: 'garlic', qty: 3, isChecked: false},
  {item: 'chicken thighs', qty: 4, isChecked: false}
]

//mySQL addData*************
// data.forEach((element) => {
//   let groceryItem = element.item;
//   let quantity = element.qty;
//   let isChecked = element.isChecked;
//   let sql = `INSERT INTO groceries (groceryItem, quantity, isChecked) VALUES ('${groceryItem}', '${quantity}', '${isChecked}')`;

//   db.query(sql, function( err, result) {
//     if (err) throw err;
//     console.log('Number of records inserted : ' + result.affectedRows);
//   });

// });

// db.end();

//Mongoose/MongoDB addData

db.collection('shoppingList').insertMany(data, function(err, doc) {
  if(err) {
    console.log(err)
  } else {
    console.log('success')
  }
  db.close();
})


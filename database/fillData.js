const { db } = require('./database.js');

let data = [
  {item: 'carrots', qty: 2, isChecked: 0},
  {item: 'cheesecake', qty: 1, isChecked: 0},
  {item: 'bubblewater', qty: 12, isChecked: 0},
  {item: 'garlic', qty: 3, isChecked: 0},
  {item: 'chicken thighs', qty: 4, isChecked: 0}
]


data.forEach((element) => {
  let groceryItem = element.item;
  let quantity = element.qty;
  let isChecked = element.isChecked;
  let sql = `INSERT INTO groceries (groceryItem, quantity, isChecked) VALUES ('${groceryItem}', '${quantity}', '${isChecked}')`;

  db.query(sql, function( err, result) {
    if (err) throw err;
    console.log('Number of records inserted : ' + result.affectedRows);
  });

});

db.end();


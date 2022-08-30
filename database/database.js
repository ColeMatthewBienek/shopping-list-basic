const mysql = require('mysql2');

// credentials to login to db
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MaiaCole1969&',
  database: 'shopping_list_basic'
});

// start connection to db =======
db.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('connected as id ' + db.threadId);
})

const getAllGroceries = (req, res) => {
  db.query("SELECT * FROM groceries", (err, result) =>{
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result);
  })
}

const addRecord = (req, res) => {
  const { groceryID, groceryItem, quantity, isChecked } = req.body;
  console.log(`Processing request to add record: ${groceryID}, ${groceryItem}:${quantity}, ${isChecked}`);
  let sql = "INSERT INTO groceries(groceryID, groceryItem, quantity, isChecked) VALUES (?,?,?,?)"
  let vals = [groceryID, groceryItem, quantity, isChecked];
  db.query(sql, vals, (err, result) =>{
    if (err) {
      console.log(err)
      res.status(400).send(err);
    }
    res.status(200).send(result);

  })
}

const updateStrikethrough = (req, res) => {
  const { groceryID, groceryItem, isChecked } = req.body;
  console.log(`Processing request to update record: ${groceryID}, ${groceryItem}, ${isChecked}`);
  let sql = `UPDATE groceries SET isChecked = ${isChecked} WHERE groceryID = ${groceryID}`;
  db.query(sql, (err, result) =>{
    if(err) {
      console.log(err)
      res.status(400).send(err);
    }
    res.status(200).send(result);

  })
}

const deleteRecords = (req, res) => {
  let sql = `DELETE FROM groceries WHERE isChecked = 1`;
  db.query(sql, function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result);
  })

}


exports.getAllGroceries = getAllGroceries;
exports.addRecord = addRecord;
exports.updateStrikethrough = updateStrikethrough;
exports.deleteRecords = deleteRecords;
exports.db = db;


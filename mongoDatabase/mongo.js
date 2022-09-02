const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/shoppingList';
mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB connection error'));
db.on('connected', console.log.bind(console, 'Mongoose connection successful'));

//mongo shoppinglist schema & model
const shoppingListSchema = new mongoose.Schema({
  item: String,
  qty: Number,
  isChecked: Boolean
});

const shoppingListModel = mongoose.model('shoppingList', shoppingListSchema, 'shoppingList');


//mongo database operations

//fetch all the records from database
const getAllGroceries = (req, res) =>{
  console.log('GET all groceries req reached MongoDB')
  shoppingListModel.find({}, function(err, data) {
    if(err) {
      console.log(err);
    } else {
      res.send(data)
    }
  })
};

const addRecord = (req, res) =>{
  //add a new record
  console.log('POST add record reached MongoDB');
  const data = req.body;
  shoppingListModel.create(data, function(err, doc) {
    if(err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  })
};


const updateStrikethrough = (req, res) =>{
  //update a record's isChecked value
  console.log('received a PUT req from express');
  console.log(req.body);
  const data = req.body;
  const doc_id = data._id;
  shoppingListModel.updateOne({_id: doc_id}, {isChecked: data.isChecked}, function(err, doc) {
    if(err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  })

};

const deleteRecords = (req, res) =>{
  //delete all records where isChecked is true
  console.log('received a DELETE req from express')
  const data = req.body;
  shoppingListModel.deleteMany({isChecked: 1}, function(err,doc) {
    if(err){
      console.log(err);
    } else {
      res.send(doc);
    }
  })
}

//exports
exports.getAllGroceries = getAllGroceries;
exports.addRecord = addRecord;
exports.updateStrikethrough = updateStrikethrough;
exports.deleteRecords = deleteRecords;
exports.db = db;
exports.shoppingListModel = shoppingListModel;
exports.shoppingListSchema = shoppingListSchema;
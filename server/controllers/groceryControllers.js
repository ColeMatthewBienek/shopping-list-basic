const { getAllGroceries } = require('../../mongoDatabase/mongo.js');
const { addRecord } = require('../../mongoDatabase/mongo.js');
const { updateStrikethrough } = require('../../mongoDatabase/mongo.js');
const { deleteRecords } = require('../../mongoDatabase/mongo.js');


const handleGetAllRecordsEndpoint =  (req,res)=> {
  console.log("Processing a GET request for all the records.");
  getAllGroceries(req, res);
}

const handleAddRecordEndpoint = (req, res) => {
  console.log("Processing a POST request to post a new record.");
  addRecord(req, res);
}

const handleUpdateStrikethroughEndpoint = (req, res) => {
  console.log("Processing a PUT request to update strikethrough status");
  updateStrikethrough(req, res);
}

const handleDeleteRecordsEndpoint = (req, res) => {
  console.log('Processing a DELETE request to remove items where isCrossed === 1');
  deleteRecords(req, res);
}

module.exports = {
  handleGetAllRecordsEndpoint: handleGetAllRecordsEndpoint,
  handleAddRecordEndpoint: handleAddRecordEndpoint,
  handleUpdateStrikethroughEndpoint: handleUpdateStrikethroughEndpoint,
  handleDeleteRecordsEndpoint: handleDeleteRecordsEndpoint
}
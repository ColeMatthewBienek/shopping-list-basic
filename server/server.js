const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');

const { handleGetAllRecordsEndpoint } = require('./controllers/groceryControllers.js');
const { handleAddRecordEndpoint } = require('./controllers/groceryControllers.js');
const { handleUpdateStrikethroughEndpoint } = require('./controllers/groceryControllers.js');
const { handleDeleteRecordsEndpoint } = require('./controllers/groceryControllers.js');

const logRequest = (req, res, next) => {
  console.log(`Received a ${req.method} request to the ${req.path} endpoint`)
  if (req.body && Object.keys(req.body).length > 0) {
    const data = JSON.stringify(req.body);
    console.log(`with a payload of: ${data}`)
  }
  next();
}

app.use(express.json());
app.use(logRequest)
app.use(express.static('client/dist'));

app.listen(PORT, (err) => {
  if(err) {
    console.err('Failed to start server');
  } else {
    console.log(`Server started on port ${PORT}.`)
  }
});


// endpoints
//route to GET all
app.get("/allRecords", handleGetAllRecordsEndpoint)

//route to add record
app.post("/addRecord", handleAddRecordEndpoint)

//route to change strikethrough status
app.put("/updateStrikethrough", handleUpdateStrikethroughEndpoint);

//route to delete records with strikethrough
app.delete("/deleteRecords", handleDeleteRecordsEndpoint);
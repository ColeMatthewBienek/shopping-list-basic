const { db } = require('../mongoDatabase/mongo.js');
const { shoppingListSchema } = require('../mongoDatabase/mongo.js');
const { shoppingListModel } = require('../mongoDatabase/mongo.js');

shoppingListModel.find({}, function(err, docs) {
  if(err){
    console.log(err);
  }
  console.log(docs)
  db.close()
})


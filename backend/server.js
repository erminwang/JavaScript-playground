const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const db = require('./config/db');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended : true }));

MongoClient.connect(db.url, (err, database) => {
  if(err) return console.log(err);
  var myDb = database.db("freecodecamp");
  require('./app/routes')(app, myDb);

  app.listen(port, () => {
      console.log("Server is listening on " + port);
  });
});

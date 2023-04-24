/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/
const mysql = require("mysql");

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const db = mysql.createConnection({
  host: "spoonfed2.cap3bgu68rku.us-west-2.rds.amazonaws.com",
  user: "admin",
  password: "spoonFed!1",
  port: "3306",
  database: "spoonFed"
})

db.connect();
/**********************
 * Example get method *
 **********************/

app.get('/recipes', function(req, res) {
  // Add your code here
  db.query('SELECT * FROM RecipeInfo', function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/recipes/*', function(req, res) {
  // Add your code here
  
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/recipes', function(req, res) {
  // Add your code here
  const recipe = req.body
  
  // execute a query to insert the new recipe into the RecipeInfo table
  db.query('INSERT INTO RecipeInfo SET ?', recipe, function (error, results, fields) {
    if (error) {
      res.json({error: 'post call failed!', message: error})
    } else {
      res.json({success: 'post call succeed!', data: {id: results.insertId}});
    }
  })
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/recipes/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/recipes', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/recipes/*', function(req, res) {
  // Add your code here
  const recipe = req.body
  db.query('UPDATE RecipeInfo SET ? WHERE id = ?', [recipe, req.params.id], function (error, results, fields) {
    if (error) {
      res.json({error: 'put call failed!', message: error})
    } else if (results.affectedRows === 0) {
      res.status(404).json({error: 'recipe not found'})
    } else {
      res.json({success: 'put call succeed!'});
    }
  })
});

/****************************
* Example delete method *
****************************/

app.delete('/recipes', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/recipes/:id', function(req, res) {
  db.query('DELETE FROM RecipeInfo WHERE id = ?', [req.params.id], function (error, results, fields) {
    if (error) {
      res.json({error: 'delete call failed!', message: error})
    } else if (results.affectedRows === 0) {
      res.status(404).json({error: 'recipe not found'})
    } else {
  res.json({success: 'delete call succeed!', url: req.url});
  }
  })
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app

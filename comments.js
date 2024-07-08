// Create web server
// 1. Import express
// 2. Create a new express server
// 3. Define a route for GET /comments
// 4. Define a route for POST /comments
// 5. Define a route for DELETE /comments
// 6. Listen on port 3000

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let comments = [];

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

app.delete('/comments', function(req, res) {
  comments = [];
  res.status(204).end();
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
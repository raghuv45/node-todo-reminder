const express = require('express')
const app = express()
const todoRoutes = require('./routes/todo');
const reminderRoutes = require('./routes/reminder');
var bodyParser = require('body-parser')

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/todo', todoRoutes);
app.use('/reminder', reminderRoutes);

//PORT 
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});
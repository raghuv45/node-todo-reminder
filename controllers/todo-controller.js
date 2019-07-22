Todo = require('../models/todo')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/candidatedb');
  
exports.createTodo = (req, res) => {
  var data = req.body;
  if (data && data.title) {
    console.log("increatetodo")
      Todo.find({
        title: data.title
      }, (err, todos) => {
        if (todos.length == 0) {
          const newtodo = new Todo({
            title: data.title,
            createdAt: new Date(),
            updatedAt: new Date()
          })
          newtodo.save().then(result => {
            console.log("result",result)
            res.send(result)
          })
        } else {
          res.status(422).json({exists:true});
        }
      })
    } else {
      console.log('email or name is missing.')
    }
}

exports.updateTodo = (req, res) => {
  var data = req.body;
  if (data._id ) {
      Todo.update({_id: data._id}, {completed:data.completed}, function(err){
        if (!err) {
          res.send({});
        }
        else {
          res.status(422).json(err);
        }
      })
    } else {
      res.status(422).json({missingfields:true});
    }
}

exports.deleteTodo = (req, res) => {
  var id = req.params('id')
  if(id){
      Todo.remove({ _id: req.params.id }, function(err) {
        if (!err) {
          res.send({});
        }
        else {
          res.status(422).json(err);
        }
      });
  }else{
    res.status(422).json({missingfields:true});
  }
}

exports.getTodos = (req, res) => {
  Todo.find({
  }, (err, todos) => {
      res.send(todos)
  })
}
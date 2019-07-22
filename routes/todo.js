var express = require('express');
var router = express.Router();

const todoController = require('../controllers/todo-controller')

router.post('/create', todoController.createTodo);
router.post('/update', todoController.updateTodo);
router.delete('/delete/:id', todoController.deleteTodo);
router.get('/get', todoController.getTodos);

module.exports = router;

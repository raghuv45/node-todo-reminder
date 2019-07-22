var mongoose = require('mongoose')

// todo schema
var todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt:{
        type: Date
    },
    updatedAt:{
        type: Date
    }
})

var Todo = module.exports = mongoose.model('Todo', todoSchema)


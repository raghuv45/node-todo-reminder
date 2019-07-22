var mongoose = require('mongoose')

// reminder schema
var reminderSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    remindDate:{
        type: Date
    },
    createdAt:{
        type: Date
    },
    updatedAt:{
        type: Date
    }
})

var Reminders = module.exports = mongoose.model('Reminders', reminderSchema)



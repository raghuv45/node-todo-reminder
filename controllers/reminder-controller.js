Reminders = require('../models/reminders')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/candidatedb');

//todo
// need to run the cron every day moring
// loop all the reminders of remindDate of current day on which ever cron is running
// send mail to the users email by using node mailer, email can be captured from frontend 
// npm module cron can be used to run the cron at specified time


exports.createReminder = (req, res) => {
  var data = req.body;
  console.log("dataa",data)
  if (data && data.reminderText) {
      Reminders.find({
        title: data.reminderText
      }, (err, reminders) => {
        if (reminders.length == 0) {
          const newreminder = new Reminders({
            title: data.reminderText,
            remindDate: data.date,
            createdAt: new Date(),
            updatedAt: new Date()
          })
          newreminder.save().then(result => {
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

exports.updateReminder = (req, res) => {
  var data = req.body;
  if (data._id ) {
      Reminders.update({_id: data._id}, {completed:data.completed}, function(err){
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

exports.deleteReminder = (req, res) => {
  if(req.params.id){
      Reminders.remove({ _id: req.params.id }, function(err) {
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

exports.getReminders = (req, res) => {
  Reminders.find({
  }, (err, reminders) => {
      res.send(reminders)
  })
}



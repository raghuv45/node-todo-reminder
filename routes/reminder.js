var express = require('express');
var router = express.Router();

const reminderController = require('../controllers/reminder-controller')


router.post('/create', reminderController.createReminder);
router.post('/update', reminderController.updateReminder);
router.delete('/delete/:id', reminderController.deleteReminder);
router.get('/get', reminderController.getReminders);

module.exports = router;

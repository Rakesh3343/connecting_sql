const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

router.post('/', studentController.addEntries);     // Create user
router.put('/:id', studentController.updateUser);   // Update user

module.exports = router;

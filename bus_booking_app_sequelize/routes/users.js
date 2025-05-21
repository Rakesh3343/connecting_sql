// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Add a new user
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await User.create({ name, email });
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

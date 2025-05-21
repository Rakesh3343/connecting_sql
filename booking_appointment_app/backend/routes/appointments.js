// backend/routes/appointments.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new appointment
router.post('/', async (req, res) => {
  const { username, phone, email } = req.body;
  if (!username || !phone || !email) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const [result] = await db.query(
    'INSERT INTO booking_app.appointments (username, phone, email) VALUES (?, ?, ?)',
    [username, phone, email]
  );
  res.json({ id: result.insertId, username, phone, email });
});

// Get all appointments
router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM booking_app.appointments');
  res.json(rows);
});

// Update appointment
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { username, phone, email } = req.body;
  await db.query(
    'UPDATE booking_app.appointments SET username = ?, phone = ?, email = ? WHERE id = ?',
    [username, phone, email, id]
  );
  res.json({ id, username, phone, email });
});

// Delete appointment
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM booking_app.appointments WHERE id = ?', [id]);
  res.json({ message: 'Deleted' });
});

module.exports = router;

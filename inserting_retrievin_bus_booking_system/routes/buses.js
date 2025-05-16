const express = require('express');
const router = express.Router();
const db = require('../db');

// POST /buses - Add a new bus
router.post('/', (req, res) => {
  const { bus_name, total_seats, available_seats } = req.body;
  db.query(
    'INSERT INTO buses (bus_name, total_seats, available_seats) VALUES (?, ?, ?)',
    [bus_name, total_seats, available_seats],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: result.insertId, bus_name, total_seats, available_seats });
    }
  );
});

// GET /buses/available/:seats - Buses with available seats > :seats
router.get('/available/:seats', (req, res) => {
  const seatCount = parseInt(req.params.seats);
  db.query(
    'SELECT * FROM buses WHERE available_seats > ?',
    [seatCount],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
});

module.exports = router;

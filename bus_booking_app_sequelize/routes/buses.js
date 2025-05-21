// routes/buses.js
const express = require('express');
const router = express.Router();
const Bus = require('../models/Bus');

// POST /buses - Add a new bus
router.post('/', async (req, res) => {
  try {
    const { bus_name, total_seats, available_seats } = req.body;
    const newBus = await Bus.create({ bus_name, total_seats, available_seats });
    res.json(newBus);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /buses/available/:seats - Buses with available seats > :seats
router.get('/available/:seats', async (req, res) => {
  try {
    const seatCount = parseInt(req.params.seats);
    const buses = await Bus.findAll({
      where: {
        available_seats: {
          [require('sequelize').Op.gt]: seatCount
        }
      }
    });
    res.json(buses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

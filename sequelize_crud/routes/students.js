// routes/students.js
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// INSERT → POST /students
router.post('/', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newStudent = await Student.create({ name, email, age });
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ALL → GET /students
router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ONE → GET /students/:id
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE → PUT /students/:id
router.put('/:id', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    await student.update({ name, email, age });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE → DELETE /students/:id
router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    await student.destroy();
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

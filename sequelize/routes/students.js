const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// POST /students
router.post('/', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /students
router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /students/:id
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /students/:id
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Student.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ message: 'Student not found' });
    const updatedStudent = await Student.findByPk(req.params.id);
    res.json(updatedStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /students/:id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Student.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

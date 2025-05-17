// routes/students.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// POST /students → Insert student
router.post('/', (req, res) => {
  const { name, email, age } = req.body;
  const sql = 'INSERT INTO students (name, email, age) VALUES (?, ?, ?)';
  db.query(sql, [name, email, age], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log('Inserted:', { id: result.insertId, name, email, age });
    res.status(201).json({ id: result.insertId, name, email, age });
  });
});

// GET /students → Retrieve all students
router.get('/', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// GET /students/:id → Retrieve student by ID
router.get('/:id', (req, res) => {
  const sql = 'SELECT * FROM students WHERE id = ?';
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Student not found' });
    res.json(results[0]);
  });
});

// PUT /students/:id → Update student
router.put('/:id', (req, res) => {
  const { name, email, age } = req.body;
  const sql = 'UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?';
  db.query(sql, [name, email, age, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Student not found' });
    console.log('Updated:', { id: req.params.id, name, email, age });
    res.json({ id: req.params.id, name, email, age });
  });
});

// DELETE /students/:id → Delete student
router.delete('/:id', (req, res) => {
  const sql = 'DELETE FROM students WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Student not found' });
    console.log('Deleted student with ID:', req.params.id);
    res.json({ message: 'Student deleted successfully' });
  });
});

module.exports = router;

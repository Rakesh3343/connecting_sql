// app.js
const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',      // or your DB host
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Example route
app.get('/', (req, res) => {
  db.query('SELECT * FROM your_table', (err, results) => {
    if (err) {
      console.error('Query error:', err);
      res.status(500).send('Database error');
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

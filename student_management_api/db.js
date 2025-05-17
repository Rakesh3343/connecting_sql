// db.js
const mysql = require('mysql2');

// Connect to MySQL server (without selecting a database yet)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',     // <-- Replace with your username
  password: '3343', // <-- Replace with your password
  multipleStatements: true         // Allows executing multiple SQL queries
});

// Step 1: Create database and use it
const setupSQL = `
  CREATE DATABASE IF NOT EXISTS studentDB;
  USE studentDB;
  CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    age INT
  );
`;

connection.query(setupSQL, (err) => {
  if (err) {
    console.error('Database setup failed:', err.message);
    process.exit(1);
  }
  console.log('Database and table ensured.');

  // Reconnect with database selected
  connection.changeUser({ database: 'studentDB' }, (err) => {
    if (err) {
      console.error('Failed to switch to studentDB:', err.message);
      process.exit(1);
    }
    console.log('Connected to studentDB.');
  });
});

module.exports = connection;

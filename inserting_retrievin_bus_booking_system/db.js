const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '3343', // replace with your MySQL password
  database: 'bus_booking_system_i_r'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

module.exports = db;

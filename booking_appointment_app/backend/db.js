// backend/db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // use your MySQL username
  password: '3343', // replace with your MySQL password
  multipleStatements: true
});

module.exports = pool.promise();

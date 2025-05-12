const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '3343',
  database: 'busbooking'
});

connection.connect((err) => {
  if (err) {
    console.log('❌ MySQL connection failed:', err);
    return;
  }
  console.log('✅ MySQL connected!');
});

const userTableQuery = `
  CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255)
  )
`;

connection.execute(userTableQuery, (err) => {
  if (err) {
    console.log('❌ Failed to create Users table:', err);
    return;
  }
  console.log('✅ Users table is ready!');
});

module.exports = connection;

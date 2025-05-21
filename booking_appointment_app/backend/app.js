// backend/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const appointmentRoutes = require('./routes/appointments');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/appointments', appointmentRoutes);

// 🛠️ Create database & table if not exists
async function initDatabase() {
  await db.query(`CREATE DATABASE IF NOT EXISTS booking_app`);
  await db.query(`
    CREATE TABLE IF NOT EXISTS booking_app.appointments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(100) NOT NULL,
      phone VARCHAR(15) NOT NULL,
      email VARCHAR(100) NOT NULL
    )
  `);
  console.log("Database and table ensured.");
}

initDatabase();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

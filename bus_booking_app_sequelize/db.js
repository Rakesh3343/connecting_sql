// db.js
const { Sequelize } = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize('bus_booking_system_i_r', 'root', '3343', {
  host: 'localhost',
  dialect: 'mysql'
});

// Test the connection
sequelize.authenticate()
  .then(() => console.log('✅ Connected to MySQL using Sequelize!'))
  .catch(err => console.error('❌ Error connecting to MySQL:', err));

module.exports = sequelize;

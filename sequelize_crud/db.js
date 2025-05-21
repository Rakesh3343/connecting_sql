// db.js
const { Sequelize } = require('sequelize');

// Sequelize connection setup
const sequelize = new Sequelize('studentDB', 'root', '3343', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;

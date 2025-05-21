// models/Bus.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Bus = sequelize.define('Bus', {
  bus_name: DataTypes.STRING,
  total_seats: DataTypes.INTEGER,
  available_seats: DataTypes.INTEGER
}, {
  tableName: 'buses',
  timestamps: false
});

module.exports = Bus;

// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Define the User model
const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING
}, {
  tableName: 'users',     // match your actual MySQL table
  timestamps: false       // no createdAt/updatedAt columns
});

module.exports = User;

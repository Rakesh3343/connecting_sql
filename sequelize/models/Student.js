// models/Student.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
  }
}, {
  tableName: 'students',
  timestamps: false // unless you want createdAt/updatedAt
});

module.exports = Student;

// db.js
const { Sequelize } = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize('studentDB', 'root', '3343', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Turn off SQL logging
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to MySQL with Sequelize.');
  } catch (err) {
    console.error('❌ Sequelize connection failed:', err);
  }
})();

module.exports = sequelize;

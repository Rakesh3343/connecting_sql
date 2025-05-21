// sync.js
const sequelize = require('./db');
const Student = require('./models/Student');

sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced.');
  process.exit();
});

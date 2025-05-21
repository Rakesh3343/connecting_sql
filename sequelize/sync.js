// sync.js
const sequelize = require('./db');
const Student = require('./models/Student');

(async () => {
  try {
    await sequelize.sync({ alter: true }); // use alter to auto-update table structure
    console.log('✅ Tables synced.');
  } catch (err) {
    console.error('❌ Failed to sync tables:', err);
  }
})();

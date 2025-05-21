// server.js
const express = require('express');
const app = express();

const sequelize = require('./db');
const User = require('./models/User');

const userRoutes = require('./routes/users');

app.use(express.json());
app.use('/users', userRoutes);

// Sync Sequelize models (creates table if not exists)
sequelize.sync()
  .then(() => {
    console.log('✅ Database synced');
    app.listen(3000, () => console.log('🚀 Server is running on port 3000'));
  })
  .catch(err => console.error('❌ Sync error:', err));

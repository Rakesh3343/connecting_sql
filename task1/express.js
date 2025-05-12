const express = require('express');
const studentRoutes = require('./routes/studentRoutes');
const db = require('./utils/db-connections');

const app = express();

app.use(express.json()); // to parse JSON bodies
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
  res.send('Hello New world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

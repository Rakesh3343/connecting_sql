// main.js
const express = require('express');
const studentRoutes = require('./routes/students');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/students', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


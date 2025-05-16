const express = require('express');
const app = express();

const userRoutes = require('./routes/users');
const busRoutes = require('./routes/buses');

app.use(express.json());

app.use('/users', userRoutes);
app.use('/buses', busRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

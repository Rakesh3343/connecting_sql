const express = require("express");
const app = express();
const db = require("./models");

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database synced");
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
});

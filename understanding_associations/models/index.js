const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("your_db", "username", "password", {
  dialect: "mysql",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./User")(sequelize, DataTypes);
db.Post = require("./Post")(sequelize, DataTypes);

// Call associations
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;

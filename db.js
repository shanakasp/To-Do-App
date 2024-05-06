const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("to_do_db", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to the database");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sequelize, connectToDb };

// connection between the Node.js application and the running Postgres instance

//1. We are importing the Sequelize library.
//2. creating a new Sequelize instance.
//3. exporting the sequelize instance.

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.PG_DB,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    dialect: "postgres",
  }
);

module.exports = sequelize;

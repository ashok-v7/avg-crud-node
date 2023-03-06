// reating a model for our users table

/*

1. importing the Sequelize library and the database connection from the util/database.js file.
2. creating a User model with the following fields:
1. id: This is the primary key of the table.
2. name: This is the name of the user.
3. email: This is the email of the user.
3. exporting the User model.

*/

const Sequelize = require("sequelize");
const db = require("../util/database");

const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = User;

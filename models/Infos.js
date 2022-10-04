const Sequelize = require("sequelize");
const config = require("../config/config");
const User = require("./Users");
const Task = require("./Tasks");

const Info = config.define("Infos", {
  location: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  hobbies: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Info;

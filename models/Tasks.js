const Sequelize = require("sequelize");
const config = require("../config/config");
const Info = require("./Infos");
const User = require("./Users");

const Task = config.define("Tasks", {
  todo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  schedule: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  is_active: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
});

module.exports = Task;

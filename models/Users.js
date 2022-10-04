const Sequelize = require("sequelize");
const config = require("../config/config");

const User = config.define("Users", {
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  work: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  is_active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: true,
  },
});

module.exports = User;

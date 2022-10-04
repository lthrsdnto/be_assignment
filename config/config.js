const dotenv = require("dotenv").config();
const { Sequelize } = require("sequelize");

const dburl = {
  database: "Person",
  username: "postgres",
  password: "123",
  host: "localhost",
  port: 5432,
  dialect: "postgres",
};

module.exports = new Sequelize(dburl);

const dotenv = require("dotenv").config();
const User = require("../models/Users");
const Info = require("../models/Infos");
const Task = require("../models/Tasks");

User.hasOne(Info, {
  foreignKey: "user_id",
  as: "info_data",
});

Info.belongsTo(User, {
  foreignKey: "user_id",
  as: "user_info",
});

Info.hasMany(Task, {
  foreignKey: "user_id",
  as: "info_data",
});

Task.belongsTo(Info, {
  foreignKey: "user_id",
  as: "task_info",
});

module.exports = { User, Info, Task };

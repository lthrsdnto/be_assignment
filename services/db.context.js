const dotenv = require("dotenv").config();
const User = require("../models/Users");
const Info = require("../models/Infos");
const Task = require("../models/Tasks");

User.hasOne(Info, {
  foreignKey: "user_id",
  as: "info_data",
});

User.hasMany(Task, {
  foreignKey: "task_id",
  as: "task_data",
});

Info.belongsTo(User, {
  foreignKey: "user_id",
  as: "user_info",
});

Task.belongsTo(Info, {
  foreignKey: "task_id",
  as: "task_data",
});

module.exports = { User, Info, Task };

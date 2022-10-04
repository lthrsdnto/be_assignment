const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 9056;
const config = require("./config/config");
const dbcontext = require("./services/db.context");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const UserRouter = require("./routes/user.route");
const TaskRouter = require("./routes/task.route");
const InfoRouter = require("./routes/info.route");

app.use(UserRouter);
app.use(TaskRouter);
app.use(InfoRouter);

config
  .authenticate()
  .then(() => {
    config.sync({ force: process.env.RESET == "true" ? true : false });
    console.log("Connected to Database!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Connected to ${port}`);
});

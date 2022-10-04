const express = require("express");
const TaskRouter = express.Router();
const TaskController = require("../controllers/task.controller");

TaskRouter.get("/get-all-task", async (req, res) => {
  let response = await TaskController.getAllTask();
  return res.status(response.status).send(response);
});

TaskRouter.get("/get-task-by-id/:id", async (req, res) => {
  let response = await TaskController.getOneTask(parseInt(req.params.id));
  return res.status(response.status).send(response);
});

TaskRouter.post("/create-task", async (req, res) => {
  let response = await TaskController.createTask(req.body);
  return res.status(response.status).send(response);
});

TaskRouter.put("/update-task", async (req, res) => {
  let response = await TaskController.updateTask(req.body);
  return res.status(response.status).send(response);
});

TaskRouter.delete("/delete-task/:id", async (req, res) => {
  let response = await TaskController.deleteTask(parseInt(req.params.id));
  return res.status(response.status).send(response);
});

module.exports = TaskRouter;

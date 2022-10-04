const express = require("express");
const UserRouter = express.Router();
const UserController = require("../controllers/user.controller");

UserRouter.get("/get-all-user", async (req, res) => {
  let response = await UserController.getAllUser();
  return res.status(response.status).send(response);
});

UserRouter.get("/get-user-by-id/:id", async (req, res) => {
  let response = await UserController.getOneUser(parseInt(req.params.id));
  return res.status(response.status).send(response);
});

UserRouter.post("/create-user", async (req, res) => {
  let response = await UserController.createUser(req.body);
  return res.status(response.status).send(response);
});

UserRouter.put("/update-user", async (req, res) => {
  let response = await UserController.updateUser(req.body);
  return res.status(response.status).send(response);
});

UserRouter.delete("/delete-user/:id", async (req, res) => {
  let response = await UserController.deleteUser(parseInt(req.params.id));
  return res.status(response.status).send(response);
});

module.exports = UserRouter;

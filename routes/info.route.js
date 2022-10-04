const express = require("express");
const InfoRouter = express.Router();
const InfoController = require("../controllers/info.controller");

InfoRouter.get("/get-all-infos-by-user-id", async (req, res) => {
  let response = await InfoController.getAllInfoByUserID();
  return res.status(response.status).send(response);
});

InfoRouter.get("/get-all-infos-by-user/:id", async (req, res) => {
  let response = await InfoController.getInfoIDWithUserInfo(
    parseInt(req.params.id)
  );
  return res.status(response.status).send(response);
});

InfoRouter.get("/get-all-info", async (req, res) => {
  let response = await InfoController.getAllInfo(req.query);
  return res.status(response.status).send(response);
});

InfoRouter.post("/create-info", async (req, res) => {
  let response = await InfoController.createInfo(req.body);
  return res.status(response.status).send(response);
});

InfoRouter.put("/update-info", async (req, res) => {
  let response = await InfoController.updateInfo(req.body);
  return res.status(response.status).send(response);
});

InfoRouter.delete("/delete-info/:id", async (req, res) => {
  let response = await InfoController.deleteInfo(parseInt(req.params.id));
  return res.status(response.status).send(response);
});

module.exports = InfoRouter;

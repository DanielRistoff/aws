const express = require("express");
const controllerCar = require("./controllers/CarController");
const recallController = require("./controllers/RecallController");
const scheduleController = require("./controllers/ScheduleController");

const routes = express.Router();

routes.get("/v1/public/cars", controllerCar.findAll);

routes.get("/v1/public/cars/:id", controllerCar.findAllById);

routes.post("/v1/public/cars", controllerCar.create);

routes.put("/v1/public/cars/:id", controllerCar.update);

routes.delete("/v1/public/cars/:id", controllerCar.delete);

routes.get("/v1/public/schedule/:id", scheduleController.findAllById);

routes.post("/v1/public/schedule", scheduleController.create);

routes.put("/v1/public/schedule/:id", scheduleController.update);

routes.delete("/v1/public/schedule/:id", scheduleController.delete);

routes.get("/v1/public/recall/:id", recallController.findAllById);

routes.post("/v1/public/recall", recallController.create);

routes.put("/v1/public/recall/:id", recallController.update);

routes.delete("/v1/public/recall/:id", recallController.delete);

module.exports = routes;

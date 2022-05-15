const express = require("express");
const controllerCar = require("./controllers/CarController");

const routes = express.Router();

routes.get("/v1/public/cars", controllerCar.findAll);

routes.get("/v1/public/cars/:id", controllerCar.findAllById);

routes.post("/v1/public/cars", controllerCar.create);

routes.put("/v1/public/cars/:id", controllerCar.update);

routes.delete("/v1/public/cars/:id", controllerCar.delete);

module.exports = routes;

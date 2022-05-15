const ModelCar = require("../models/Car");

module.exports = {
  async findAll(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      const cars = await ModelCar.findAll();
      return res.json(cars);
    } catch (erro) {
      return console.error("Erro na findAll : ", erro);
    }
  },

  async create(req, res) {
    try {
      const car = await ModelCar.create({
        Brand: req.body.Brand,
        Model: req.body.Model,
        Year: req.body.Year,
        Plate: req.body.Plate,
      });
      return res.json(car);
    } catch (erro) {
      return console.error("Erro na create : ", erro);
    }
  },

  async update(req, res) {
    try {
      const car = await ModelCar.findByPk(req.params.id);
      if (car) {
        (car.Brand = req.body.Brand),
          (car.Model = req.body.Model),
          (car.Year = req.body.Year),
          (car.Plate = req.body.Plate);
        await car.save();
      }

      return res.json(car);
    } catch (erro) {
      return console.error("Erro na update : ", erro);
    }
  },

  async findAllById(req, res) {
    try {
      const car = await ModelCar.findByPk(req.params.id);

      return res.json(car);
    } catch (erro) {
      return console.error("Erro na findAllById : ", erro);
    }
  },

  async delete(req, res) {
    try {
      const car = await ModelCar.findByPk(req.params.id);
      await car.destroy();
      return res.json(car);
    } catch (erro) {
      return console.error("Erro na delete : ", erro);
    }
  },
};

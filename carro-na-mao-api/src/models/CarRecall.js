const sequelize = require("sequelize");
const database = require("../db");
const shema = "";

class CarRecall extends sequelize.Model {}

Car.init(
  {
    IdCar: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    IdREcall: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "tbCarRecall",
    shema,
  }
);

module.exports = CarRecall;

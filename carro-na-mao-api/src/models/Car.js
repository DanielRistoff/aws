const sequelize = require("sequelize");
const database = require("../db");
const shema = "";

class Car extends sequelize.Model {}

Car.init(
  {
    Id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Brand: {
      type: sequelize.STRING,
      allowNull: false,
    },
    Model: {
      type: sequelize.STRING,
      allowNull: false,
    },
    Year: {
      type: sequelize.STRING,
      allowNull: false,
    },
    Plate: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "tbCar",
    shema,
  }
);

module.exports = Car;

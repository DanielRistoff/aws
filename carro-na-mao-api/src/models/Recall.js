const sequelize = require("sequelize");
const database = require("../db");
const shema = "";

class Recall extends sequelize.Model {}

Car.init(
  {
    Id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    StartYear: {
      type: sequelize.DATE,
      allowNull: false,
    },
    FinalYear: {
      type: sequelize.DATE,
      allowNull: false,
    },
    Model: {
      type: sequelize.STRING,
      allowNull: false,
    },
    Description: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "tbRecall",
    shema,
  }
);

module.exports = Recall;

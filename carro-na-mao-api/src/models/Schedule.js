const sequelize = require("sequelize");
const database = require("../db");
const shema = "";

class Schedule extends sequelize.Model {}

Schedule.init(
  {
    Id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    Date: {
      type: sequelize.DATE,
      allowNull: false,
    },
    Hour: {
      type: sequelize.TIME,
      allowNull: false,
    },
    Odometer: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    KindOfService: {
      type: sequelize.STRING,
      allowNull: false,
    },
    Note: {
      type: sequelize.STRING,
      allowNull: false,
    },
    Local: {
      type: sequelize.STRING,
      allowNull: false,
    },
    IdCar: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "tbSchedule",
    shema,
  }
);

module.exports = Schedule;

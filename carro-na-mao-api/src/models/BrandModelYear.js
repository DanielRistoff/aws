const sequelize = require("sequelize");
const database = require("../db");
const shema = "";

class BrandModelYear extends sequelize.Model {}

BrandModelYear.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    brand_model_id: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    year: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "brand_model_year",
    shema,
  }
);

module.exports = BrandModelYear;

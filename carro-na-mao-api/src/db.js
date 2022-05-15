const sequelize = require("sequelize");
const database = new sequelize("CarroNaMao", "root", "1234", {
  dialect: "mssql",
  host: "172.17.0.2",
  port: 3306,
});

database.sync();

module.exports = database;

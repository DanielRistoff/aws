const ModelSchedule = require("../models/Schedule");

module.exports = {
  async create(req, res) {
    try {
      const schedule = await ModelSchedule.create({
        Date: req.body.Date,
        Hour: req.body.Hour,
        Odometer: req.body.Odometer,
        KindOfService: req.body.KindOfService,
        Note: req.body.Note,
        Local: req.body.Local,
        IdCar: req.body.IdCar,
      });
      return res.json(schedule);
    } catch (erro) {
      return console.error("Erro na create : ", erro);
    }
  },

  async update(req, res) {
    try {
      const schedule = await ModelSchedule.findByPk(req.params.id);
      if (schedule) {
        (schedule.Date = req.body.Date),
          (schedule.Hour = req.body.Hour),
          (schedule.Odometer = req.body.Odometer),
          (schedule.KindOfService = req.body.KindOfService),
          (schedule.Note = req.body.Note),
          (schedule.Local = req.body.Local),
          (schedule.IdCar = req.body.IdCar);
        await schedule.save();
      }

      return res.json(schedule);
    } catch (erro) {
      return console.error("Erro na update : ", erro);
    }
  },

  async findAllById(req, res) {
    try {
      const schedule = await ModelSchedule.findByPk(req.params.id);

      return res.json(schedule);
    } catch (erro) {
      return console.error("Erro na findAllById : ", erro);
    }
  },

  async delete(req, res) {
    try {
      const schedule = await ModelSchedule.findByPk(req.params.id);
      await schedule.destroy();
      return res.json(schedule);
    } catch (erro) {
      return console.error("Erro na delete : ", erro);
    }
  },
};

const ModelRecall = require("../models/Recall");

module.exports = {
  async create(req, res) {
    try {
      const recall = await ModelRecall.create({
        StartYear: req.body.StartYear,
        FinalYear: req.body.FinalYear,
        Model: req.body.Model,
        Description: req.body.Description,
      });
      return res.json(recall);
    } catch (erro) {
      return console.error("Erro na create : ", erro);
    }
  },

  async update(req, res) {
    try {
      const recall = await ModelRecall.findByPk(req.params.id);
      if (recall) {
        (recall.StartYear = req.body.StartYear),
          (recall.FinalYear = req.body.FinalYear),
          (recall.Model = req.body.Model),
          (recall.Description = req.body.Description),
          await recall.save();
      }

      return res.json(recall);
    } catch (erro) {
      return console.error("Erro na update : ", erro);
    }
  },

  async findAllById(req, res) {
    try {
      const recall = await ModelRecall.findByPk(req.params.id);

      return res.json(recall);
    } catch (erro) {
      return console.error("Erro na findAllById : ", erro);
    }
  },

  async delete(req, res) {
    try {
      const recall = await ModelRecall.findByPk(req.params.id);
      await recall.destroy();
      return res.json(recall);
    } catch (erro) {
      return console.error("Erro na delete : ", erro);
    }
  },
};

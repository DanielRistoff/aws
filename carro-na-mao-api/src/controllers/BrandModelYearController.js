const BrandModelYear = require("../models/BrandModelYear");

module.exports = {
  async findAll(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      const brandModelYear = await BrandModelYear.findAll();
      return res.json(brandModelYear);
    } catch (erro) {
      return console.error("Erro na findAll (BrandModelYearController) : ", erro);
    }
  },

  async create(req, res) {
    try {
      const brandModelYear = await BrandModelYear.create({
        brand_model_id: req.body.brand_model_id,
        year: req.body.year,
      });
      return res.json(brandModelYear);
    } catch (erro) {
      return console.error("Erro na create (BrandModelYearController): ", erro);
    }
  },

  async update(req, res) {
    try {
      const brandModelYear = await BrandModelYear.findByPk(req.params.id);
      if (brandModelYear) {
        (brandModelYear.brand_model_id = req.body.brand_model_id),
          (brandModelYear.year = req.body.year),
        await brandModelYear.save();
      }

      return res.json(brandModelYear);
    } catch (erro) {
      return console.error("Erro na update (BrandModelYearController): ", erro);
    }
  },

  async findAllById(req, res) {
    try {
      const brandModelYear = await BrandModelYear.findByPk(req.params.id);

      return res.json(brandModelYear);
    } catch (erro) {
      return console.error("Erro na findAllById (BrandModelYearController): ", erro);
    }
  },

  async delete(req, res) {
    try {
      const brandModelYear = await BrandModelYear.findByPk(req.params.id);
      await brandModelYear.destroy();
      return res.json(brandModelYear);
    } catch (erro) {
      return console.error("Erro na delete (BrandModelYearController): ", erro);
    }
  },
};

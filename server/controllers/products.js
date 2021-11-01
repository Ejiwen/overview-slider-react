var models = require("../models");

module.exports = {
  getAll: function (req, res) {
    const { count, page } = req.query;
    let countNb = count ? Number(req.query.count) : 5;
    let pageNb = page ? (Number(req.query.page) - 1) * countNb : 0;
    models.products.getAll(countNb, pageNb, (err, data) => {
      if (err) {
        console.log("ERROR");
      } else {
        res.send(data);
      }
    });
  },

  getOne: function (req, res) {
    const { product_id } = req.params;
    models.products.getOne(product_id, (err, data) => {
      if (err) {
        console.log("ERROR");
      } else {
        res.send(data);
      }
    });
  },
};

var models = require("../models");

module.exports = {
  getAll: function (req, res) {
    const { product_id } = req.params;
    models.related.getAll(product_id, (err, data) => {
      if (err) {
        console.log("ERROR");
      } else {
        res.send(data);
      }
    });
  },
};

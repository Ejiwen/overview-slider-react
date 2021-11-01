var models = require("../models");

module.exports = {
  getStyles: function (req, res) {
    const { product_id } = req.params;
    models.styles.getStyles(product_id, (err, data) => {
      if (err) {
        console.log("ERROR");
      } else {
        res.send(data);
      }
    });
  },
};

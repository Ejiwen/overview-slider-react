var db = require("../db/index.js");

module.exports = {
  getAll: function (id, callback) {
    const q = `SELECT array_agg(related.related_product_id)
    FROM related
    WHERE related.current_product_id = ${id}`;
    db.query(q, (err, res) => {
      if (err) {
        console.log("ERROR");
      } else {
        callback(null, res.rows[0].array_agg);
      }
    });
  },
};

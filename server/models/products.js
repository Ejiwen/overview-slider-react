var db = require("../db/index.js");

module.exports = {
  getAll: function (count, page, callback) {
    db.query(
      `SELECT * FROM product LIMIT ${count} OFFSET ${page}`,
      (err, res) => {
        if (err) {
          console.log("ERROR");
        } else {
          callback(null, res.rows);
        }
      }
    );
  },

  getOne: function (id, callback) {
    const q = `SELECT *,
    (
      SELECT json_agg(f)
      FROM
      (
        SELECT feature, value
        FROM features
        WHERE features.product_id = product.id
      ) as f
    ) as features
    FROM product
    WHERE id=${id}`;
    db.query(q, (err, res) => {
      if (err) {
        console.log("ERROR");
      } else {
        callback(null, res.rows[0]);
      }
    });
  },
};

/*
 FROM
      (
        SELECT feature, value
        FROM features
        WHERE features.product_id = product.id
      ) as f
    ) as features
*/

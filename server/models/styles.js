var db = require("../db/index.js");

module.exports = {
  getStyles: function (id, callback) {
    const q = `SELECT product.id as product_id,
    (
      SELECT array_to_json(array_agg(row_to_json(t)))
      FROM (
      SELECT id as style_id,name, original_price, sale_price, default_style as default,

      (
        SELECT CASE COUNT(f) WHEN 0 THEN '[]' ELSE json_agg(f) END
      FROM
      (
        SELECT thumbnail_url, url
        FROM photos
        WHERE photos.style_id = styles.id
      ) as f
      ) as photos,
      (
        SELECT json_agg(s)
      FROM
      (
        SELECT size, quantity
        FROM skus
        WHERE skus.style_id = styles.id
      ) as s
      ) as skus

      FROM styles WHERE styles.product_id = ${id}
      )t
    ) as results

    FROM product
    WHERE product.id=${id}`;
    db.query(q, (err, res) => {
      if (err) {
        console.log("ERROR");
      } else {
        callback(null, res.rows[0]);
      }
    });
  },
};
//select array_to_json(array_agg(row_to_json(t)))

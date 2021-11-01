const parse = require("csv-parse");
const fs = require("fs");
const path = require("path");

const csvData = [];

fs.createReadStream(path.join(__dirname, "../../BD/skus.csv"))
  .pipe(
    parse({
      delimiter: ",",
      columns: true,
    })
  )
  .on("data", function (dataRow) {
    if (dataRow.styleId == 1) {
      csvData.push(dataRow.size);
    }

    //}
  })
  .on("end", function (dataRow) {
    console.log(csvData);
  });

fs = require("fs");
const parser = require("xml2json");
const ObjectsToCsv = require("objects-to-csv");
//Imports needed modules for converting and parsing files

const fileName = `./PO - In Boot`;
//Change file name to change file converted, could be written into a loop to iterate through multiple files at once

const xmlType = ".xml";
const csvType = ".csv"

fs.readFile(fileName.concat(xmlType), function (err, data) {
  var json = parser.toJson(data);
  //Parses raw xml into a JSON format
  const obj = JSON.parse(json);
  //Parses JSON into a object to be used by JS
  //Headers and other data can be accessed using this object, not sure if they are needed?

  (async () => {
    const csv = new ObjectsToCsv(obj.Purchase_Order.Purchase_Order_Lines);

    // Save to file:
    await csv.toDisk(fileName.concat(csvType));

    // Return the CSV file as string:
    console.log(await csv.toString());
  })();
});

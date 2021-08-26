console.log("----- XML2CSV -----");

fs = require('fs');
var parser = require('xml2json');

fs.readFile( './PO - In Boot.xml', function(err, data) {
    var json = parser.toJson(data);
    let dataString = JSON.stringify(json);
    for (let i = 0; i < dataString.length; i++){
        if (dataString[i] == "Something to filter out here!" ) {
            dataString = dataString.slice(i);
        }
    };
    console.log(dataString);
 });
// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log("tableData", tableData);

tableData.forEach((ufoDatetime) => {
  var row = tbody.append("tr");
  Object.entries(ufoDatetime).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

let date = "1/1/20";

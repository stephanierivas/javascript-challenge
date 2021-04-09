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

//select button
var button = d3.select("#filter-btn");

//create event handlers for clicking the button
button.on("click", runEnter);

function runEnter() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  var filteredData = tableData.filter((date) => date.datetime === inputValue);

  console.log(filteredData);
  //filter for date
  // tableData.filter((datum) => {
  //     datum.datetime ===
  //   })
tbody.html("")
  filteredData.forEach((ufoDatetime) => {
    var row = tbody.append("tr");
    Object.entries(ufoDatetime).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

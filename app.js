// from data.js
var tableData = data;
console.log(tableData);
var tbody = d3.select("tbody");

// YOUR CODE HERE!

// Select the submit button
var submit = d3.select("#filter-btn");
submit.on("click", function() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
//    <input type="#filter-btn" name="clear" value="Clear Form" onclick="clearForm(this.form);">
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);
    
    var filteredData = tableData.filter(person => (person.datetime === inputValue));

    filteredData.forEach((sightingMap) => {
  var row = tbody.append("tr");
  Object.entries(sightingMap).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});
    
    console.log(filteredData);
})

//
//function newFunction() {
//            document.getElementById("newForm").reset();
//         }
// Assign the data from "data.js" to a variable
var tableData = data;
// Display table
function tableDisplay(tableData) {
    var tbody = d3.select("tbody").html("");
    tableData.forEach((record) => {
        var row = tbody.append("tr");
        Object.entries(record).forEach(([key, value]) => {
            var cell = row.append("td").html(value);
        });
    });
};
// Reset and display full table
function resetDisplay(element) {
    element.form.reset();
    tableDisplay(tableData);
    // Pass record count to HTML
    document.getElementById("count").innerHTML = tableData.length;
};
tableDisplay(tableData);
// Pass record count to HTML
document.getElementById("count").innerHTML = tableData.length;
// Select the submit button
var button = d3.select("#filter-btn");
// Filter table and display on date-value submit
button.on("click", function(event) {
    // Get the value property of the input element
    var inputValue = d3.select("#datetime").property("value");
    // Trim leading zeros and trim white-space
    inputValue = inputValue.trim().replace(/\b0/g, '');
    var filteredData = tableData.filter(function(event) {
        if (inputValue !== null && inputValue !== '') {
            return event.datetime === inputValue;
        };
        return event.datetime;
    });
    tableDisplay(filteredData);
    // Pass record count to HTML
    document.getElementById("count").innerHTML = filteredData.length;
});
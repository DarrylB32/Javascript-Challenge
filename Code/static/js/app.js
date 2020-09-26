// import ufa sightings from data.js
var sightingsData = data;

// Function to display data
function displayData(object) {
    object.forEach((sighting) => {
    var row = d3.select("tbody").append("tr");
    Object.values(sighting).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
// Display all UFO sightings Data  
displayData(sightingsData);


// Create event handlers for filter button and form
d3.select("#filter-btn").on("click", runEnter);
d3.select("form").on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Get the value property of the input element
  var inputValue = d3.select("input").property("value");

  // Display input value to console
  // console.log(inputValue);

  // Filter data by date (input value)
  var filteredData = sightingsData.filter(sighting => sighting.datetime === inputValue);
  
  // Erase data in table 
  d3.select("tbody").html("");

  // Display all filtered UFO sightings Data 
  displayData(filteredData);
};
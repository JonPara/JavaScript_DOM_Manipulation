// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
//searchButton.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to addressData initially
var filteredData = ufoData;
var resetData = ufoData;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current address object and its fields
    var data = filteredData[i];
    var fields = Object.keys(data);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
    var field = fields[j];
    var $cell = $row.insertCell(j);
    $cell.innerText = data[field];
    }
  }
}
//renderTable();

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterState = $stateInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredAddresses = addressData.filter(function(address) {
    var addressState = address.state.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressState === filterState;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();



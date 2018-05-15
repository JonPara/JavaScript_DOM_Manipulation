// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", resetData);

// Set filteredData to ufoData initially
var filteredData = ufoData;
var resetData = ufoData;

// renderTable renders the filteredData to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current data object and its fields
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

function handleSearchButtonClick(event) {
  // prevent page from refreshing
  event.preventDefault();

  var filterDate = $dateInput.value.trim();
  if (filterDate != "") {
    filteredData = filteredData.filter(function (data) {

      var dataDate = data.datetime;
      return dataDate === filterDate;
    });
};

  var filterCity = $cityInput.value.trim().toLowerCase();
  if(filterCity != ""){
     filteredData = filteredData.filter(function (data) {
       var dataCity = city.data;
       return dataCity === filteredData
  });
};

  var filterState = $stateInput.value.trim().toLowerCase();
  if(filterState != ""){
    filteredData = filteredData.filter(function (data) {
      var dataState = state.data;
      return dataState === filteredData
  });
};

var filterCountry = $countryInput.value.trim().toLowerCase();
if(filterCountry != ""){
  filteredData = filteredData.filter(function (data) {
    var dataCountry = country.data;
    return dataCountry === filteredData
});
};

var filterShape = $shapeInput.value.trim().toLowerCase();
if(filterShape != ""){
  filteredData = filteredData.filter(function (data) {
    var dataShape = shape.data;
    return dataShape === filteredData
});
};

renderTable();

  renderTable();
}

function resetData() {
  filteredData = ufoData;
  $dateInput.value = "";
  $cityInput.value = "";
  $stateInput.value = "";
  $countryInput.value = "";
  $shapeInput.value = "";
  renderTable();
}

function resetForm() {
  document.getElementById("myForm").reset();
}
// Render the table for the first time on page load
renderTable();


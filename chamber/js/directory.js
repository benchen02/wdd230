const requestURL =
  "https://raw.githubusercontent.com/benchen02/wdd230/master/chamber/json/data.json";
const cards = document.querySelector(".grid");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  });
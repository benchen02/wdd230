const hiddenDateField = document.querySelector("#hiddendate");
const visitDate = Date(window.localStorage.getItem("visitdate"));
hiddenDateField.innerHTML = visitDate;
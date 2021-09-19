const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();


const datemodified = document.getElementById("datemodified");
datemodified.textContent = new Date (document.lastModified).toLocaleString();

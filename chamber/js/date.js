const lastmodfulldate = document.querySelector('#lastmodfulldate');
lastmodfulldate.textContent = `Last Updated: ${document.lastModified}`;

const currentyear = document.querySelector('#currentyear');
currentyear.textContent = new Date().getFullYear();

const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = fulldate;
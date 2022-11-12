const lastmodfulldate = document.querySelector('#currentdate');
currentdate.textContent = document.lastModified;

const currentyear = document.querySelector('#currentyear');
currentyear.textContent = new Date().getFullYear();

const datefield = document.querySelector("#date");
const now = Date.now();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = fulldate;



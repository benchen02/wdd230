const currYear = document.querySelector("#currYear");
currYear.textContent = new Date().getFullYear();

const lastMod = document.querySelector("#lastMod");
lastMod.textContent = `Last Modification:  ${document.lastModified}`;


const datefield = document.querySelector("date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-Uk", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `${fulldate}`;
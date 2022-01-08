const currYear = document.querySelector('#currYear');
currYear.textContent = new Date().getFullYear();

const lastMod = document.querySelector('#lastMod');
lastMod.textContent = `Last modfied on:  ${document.lastModified}`;
const lastmodfulldate = document.querySelector('#lastmodfulldate');
lastmodfulldate.textContent = document.lastModified;

const currentyear = document.querySelector('#currentyear');
currentyear.textContent = new Date().getFullYear();

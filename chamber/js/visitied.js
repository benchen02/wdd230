const minute = 1000 * 60;
const hour = minute * 60;
const days = hour * 24;
const year = days * 365;

const daySince = document.querySelector('#daySince');
let daysVisit = Number(window.localStorage.getItem("visits-ls"));

if (daysVisit == 0){
    void(0);
} else {
    daydiff = daysVisit - Date.now();
    dayTotal = daydiff/days;
    dayMod = daydiff%days;
    dayhour = dayMod/hour;
    dayMod = dayMod%hour;
    dayMin = dayMod/minute;
}

currentdate = Number(window.localStorage.setItem("visits-ls", Date.now()));
daySince.textContent = `Time since you last visit: ${Math.round(Math.abs(dayTotal))} 
Days and ${Math.round(Math.abs(dayhour))} hours and ${Math.round(Math.abs(dayMin))} min`;

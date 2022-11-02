const tempFinput = document.querySelector('#tempF');
const windspdinput = document.querySelector('#windspd');
const windchill = document.querySelector('#windchl');


tempFinput.addEventListener('change', calcwindspeed);
windspdinput.addEventListener('change', calcwindspeed);

function calcwindspeed(event){

    const tempF = parseInt(tempFinput.value);
    const windspd = parseInt(windspdinput.value);

    if (tempF <= 50 && windspd > 3) {
       result = (35.74 + (0.6215 * tempF))-(35.75 * Math.pow(windspd,0.16)) + (0.4275*tempF*Math.pow(windspd,0.16));
       roundresult = Math.round(result * 100)/100;
    } else if (tempF >= 50 && windspd < 3) {
        result = 'N/A';
    } else {
        result = '';
    }
    
    windchill.textContent = roundresult;
}
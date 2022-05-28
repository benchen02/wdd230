const tempFinput = document.querySelector('#tempF');
const windspdinput = document.querySelector('#windspd');
const windchill = document.querySelector('#windchl');
const btn = document.querySelector('#calcwindchill');

btn.addEventListener('click', () => {
    
    const tempF = parseInt(tempFinput.value);
    const windspd = parseInt(windspdinput.value);

    if (tempF <= 50 && windspd > 3) {
       result = Math.round((35.74+(0.6215*tempF)-(35.75*(windspd^0.16))+(0.4275 *tempF*(windspd^0.16)))*100)/100;
    } else if (tempF >= 50 && windspd < 3) {
        result = 'N/A';
    } else {
        result = '';
    }
    
    windchill.textContent = result;
});
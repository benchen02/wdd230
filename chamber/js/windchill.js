// Variables for tempurature, wind speed, wind chill, weather icon, and weather description.
const tempF = document.querySelector('#tempF');
const windspd = document.querySelector('#windspd');
const windchill = document.querySelector('#windchl');
const icon = document.querySelector('#icon');
const description = document.querySelector('#desc');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Rexburg&units=imperial&APPID=6a11094bbff7a2a4374e1a946eca61c8"

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function  displayResults(weatherData) {
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const windspeed = weatherData.wind.speed.toFixed(1);
    const temp = `${weatherData.main.temp.toFixed(0)}`;

    if (temp <= 50 && windspeed > 3) {
        result = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16));
        roundresult = Math.round(result * 1)/1;
     } else if (temp >= 50 && windspeed < 3) {
         result = 'N/A';
     }

     icon.setAttribute('src', iconsrc);
     description.textContent = `${desc}`;
     windspd.textContent = `Wind Speed: ${windspeed}`;
     tempF.textContent = `${temp}\xB0F`;
     windchill.textContent = `Wind Chill: ${roundresult}`;
  }
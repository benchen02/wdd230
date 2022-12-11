const url = "https://api.openweathermap.org/data/2.5/onecall?lat=33.158&lon=-117.351&exclude=current,minutely,hourly,alerts&cnt=3&units=imperial&APPID=6a11094bbff7a2a4374e1a946eca61c8"
const cards = document.querySelector('#weather');

async function weatherapi() {
      const response = await fetch(url);
      const data = await response.json();
      console.table(data);
      displayWeather(data);
  }

  weatherapi();

  function displayWeather(weatherData){

    for(i=0;i<3;i++){
        
        var card = document.createElement("section");
        var icon = document.createElement("img");
        const tempF = document.createElement('p');
        const desc = document.createElement('p');
        const humidity = document.createElement('p');

        var iconsrc = `https://openweathermap.org/img/w/${weatherData.daily[i].weather[0].icon}.png`;
        icon.setAttribute('src', iconsrc);

        tempF.textContent = `${Math.round(weatherData.daily[i].temp.day)}\xB0F`;
        tempF.setAttribute('class', 'temp');

        desc.textContent = `${weatherData.daily[i].weather[0].description}`;
        desc.setAttribute('class', 'desc');

        humidity.textContent = `Humidity: ${weatherData.daily[i].humidity}%`;
        humidity.setAttribute('class', 'humidity');

        card.appendChild(desc);
        card.appendChild(icon);
        card.appendChild(tempF);
        card.appendChild(humidity);

        cards.appendChild(card);
    }
  }
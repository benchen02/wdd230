const url = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&cnt=9&APPID=6a11094bbff7a2a4374e1a946eca61c8"

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
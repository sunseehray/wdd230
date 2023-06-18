const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// const url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=db9906a97dca16acb8595cd219ca129b';

// lat: 64.837845, lon: -147.716675
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=64.837845&lon=-147.716675&units=imperial&appid=db9906a97dca16acb8595cd219ca129b';

// const url = 'http://api.openweathermap.org/geo/1.0/direct?q=Fairbanks&units=imperial&appid=db9906a97dca16acb8595cd219ca129b';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`; 

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}
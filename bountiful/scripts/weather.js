const currentweather = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=db9906a97dca16acb8595cd219ca129b';

const forecastweather = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=imperial&appid=db9906a97dca16acb8595cd219ca129b';

async function displayCurrentWeather(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            createCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function displayWeatherForecast(url) {
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

function createCurrentWeather (weatherData) {
    const weatherSummary = document.querySelector('.weather');
    const currentWeatherSection = document.createElement('div');

    let h3 = document.createElement('h3');
    let weatherIcon = document.createElement('img');
    let temperature = document.createElement('p');
    let weatherDesc = document.createElement('p');
    let humidity = document.createElement('p');

    h3.textContent = `Current Conditions`;

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    const t = weatherData.main.temp;
    const h = weatherData.main.humidity;

    temperature.innerHTML = `${t.toFixed(1)} &deg; F`;
    weatherDesc.textContent = desc;
    humidity.innerHTML = `💧 ${h} %`;

    currentWeatherSection.appendChild(h3);
    currentWeatherSection.appendChild(weatherIcon);
    currentWeatherSection.appendChild(weatherDesc);
    currentWeatherSection.appendChild(temperature);
    currentWeatherSection.appendChild(humidity);

    weatherSummary.appendChild(currentWeatherSection);
}

displayCurrentWeather(currentweather);

displayWeatherForecast(forecastweather);
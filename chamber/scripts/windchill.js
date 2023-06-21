// Assume placeholder values are Celsius and KPH !!
const temp = 10;
const windSpeed = 5;

function CelsiusToFarenheit (tempCelsius) {
    let farenheit = (tempCelsius * 9 / 5) + 32;
    return farenheit;
}

function CalculateWindChill (t, s) {
    let windChill = 35.74 + 0.6215 * t - 35.75 * (s ** 0.16) + 0.4275 * t * (s ** 0.16);
    return windChill;
}

function ConvertKPHToMPH (kph) {
    let mph = kph * 0.621371;
    return mph;
}

function ConvertMeterPerSecondToKPH (mps) {
    let kph = mps * 3600 / 1000;
    return kph;
}


// load placeholder values
document.querySelector('#tempValue').innerHTML = temp;
document.querySelector('#windspeedValue').innerHTML = windSpeed;
document.querySelector('#windChillValue').innerHTML = "N/A";


// W10 - Weather API

const currentTemp = document.querySelector('#tempValue');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('p.weatherDescription');
const windSpeedElement = document.querySelector('#windspeedValue');

// const url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=db9906a97dca16acb8595cd219ca129b';

// lat: 64.837845, lon: -147.716675
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=14.5569&lon=121.0235&units=imperial&appid=db9906a97dca16acb8595cd219ca129b';

// const url = 'http://api.openweathermap.org/geo/1.0/direct?q=Makati&units=metric&appid=db9906a97dca16acb8595cd219ca129b';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Makati&units=metric&appid=db9906a97dca16acb8595cd219ca129b';

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

// Convert values
// let tempFarenheit = CelsiusToFarenheit(temp);
// let windSpeedMPH = ConvertKPHToMPH(windSpeed);



function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`; 

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    const windSpeedKPH = ConvertMeterPerSecondToKPH(weatherData.wind.speed).toFixed(1);

    
    windSpeedElement.innerHTML = "";
    windSpeedElement.innerHTML = `${windSpeedKPH}`;


    const tempFarenheit = CelsiusToFarenheit(weatherData.main.temp);
    const windSpeedMPH = ConvertKPHToMPH(windSpeedKPH);

    if (tempFarenheit <= 50 && windSpeedMPH > 3) {
        let f = CalculateWindChill(tempFarenheit, windSpeedMPH);
        document.querySelector('#windChillValue').innerHTML = "";
        document.querySelector('#windChillValue').innerHTML = f.toFixed(2);
    }
}
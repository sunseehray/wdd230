const currentweather = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=db9906a97dca16acb8595cd219ca129b';

const forecastweather = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&units=imperial&appid=db9906a97dca16acb8595cd219ca129b';

async function apiFetch(url) {
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

apiFetch(currentweather);

apiFetch(forecastweather);
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=db9906a97dca16acb8595cd219ca129b';

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
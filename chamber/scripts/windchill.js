// Assume values are Celsius and KPH !!
const temp = 33;
const windSpeed = 2.5;

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


// load default values
document.querySelector('#tempValue').innerHTML = temp;
document.querySelector('#windspeedValue').innerHTML = windSpeed;
document.querySelector('#windChillValue').innerHTML = "N/A";

// Convert values
let tempFarenheit = CelsiusToFarenheit(temp);
let windSpeedMPH = ConvertKPHToMPH(windSpeed);

if (tempFarenheit <= 50 && windSpeedMPH > 3) {
    let f = CalculateWindChill(tempFarenheit, windSpeedMPH);
    document.querySelector('#windChillValue').innerHTML = "";
    document.querySelector('#windChillValue').innerHTML = f;
}


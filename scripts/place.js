// Update current year and the date the document was last modified
const year = document.querySelector("#year");
const today = new Date();

const lastModifiedElement = document.getElementById('lastModifiedDate');
const lastModifiedDate = new Date(document.lastModified);
const formattedDate = lastModifiedDate.toLocaleString();

year.innerHTML = `&copy <span>${today.getFullYear()}</span> &#128051 Cristobal Henriquez &#128051 Canada`;

lastModifiedElement.textContent = 'Last Modified: ' + formattedDate;

// Weather
const temperatureElement = document.querySelector("#temperature");
const windSpeedElement = document.querySelector("#windSpeed");
const windChillElement = document.querySelector("#windChill");

// Extract numerical values from the text content
const temperatureValue = parseFloat(temperatureElement.textContent.replace('°C', ''));
const windSpeedValue = parseFloat(windSpeedElement.textContent.replace(' km/h', ''));

const calculateWindChill = (temperature, windSpeed) => {
    if (temperature > 10 || windSpeed <= 4.8) {
        return "N/A";
    }
    const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return windChill.toFixed(2); // Round to two decimal places
};

// Calculate wind chill value
const windChillValue = calculateWindChill(temperatureValue, windSpeedValue);

// Update the DOM with the wind chill value
windChillElement.textContent = `${windChillValue} °C`;

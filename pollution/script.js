const apiKey = "36c0f65f2f945402cf22bcb06c3ba907"; // Replace with your OpenWeatherMap API key

async function getAirPollutionData() {
    const country = document.getElementById('country').value.trim();

    if (!country) {
        alert("Please enter a country name.");
        return;
    }

    try {
        //Get country coordinates using OpenWeather Geocoding API
        const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=1&appid=${apiKey}`;
        const geoResponse = await fetch(geoUrl);
        if (!geoResponse.ok) throw new Error("Failed to fetch location data");
        const geoData = await geoResponse.json();

        if (geoData.length === 0) {
            alert("Invalid country name. Please try again.");
            return;
        }

        const lat = geoData[0].lat;
        const lon = geoData[0].lon;

        //Fetch air pollution data
        const pollutionUrl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        const pollutionResponse = await fetch(pollutionUrl);
        if (!pollutionResponse.ok) throw new Error("Failed to fetch air pollution data");
        const pollutionData = await pollutionResponse.json();

        // Display results
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <h3>Air Pollution Data for ${geoData[0].name}:</h3>
            <p>Air Quality Index (AQI): ${pollutionData.list[0].main.aqi}</p>
            <p>CO: ${pollutionData.list[0].components.co} μg/m³</p>
            <p>NO: ${pollutionData.list[0].components.no} μg/m³</p>
            <p>NO₂: ${pollutionData.list[0].components.no2} μg/m³</p>
            <p>O₃: ${pollutionData.list[0].components.o3} μg/m³</p>
            <p>SO₂: ${pollutionData.list[0].components.so2} μg/m³</p>
            <p>PM2.5: ${pollutionData.list[0].components.pm2_5} μg/m³</p>
            <p>PM10: ${pollutionData.list[0].components.pm10} μg/m³</p>
            <p>NH₃: ${pollutionData.list[0].components.nh3} μg/m³</p>
        `;
    } catch (error) {
        alert("Error fetching data. Please try again.");
        console.error(error);
    }
}

const service = document.getElementById("select-service");
const dropdownSelected = document.getElementById("selected");

const htmlSelector = document.querySelector('html');

// Toggle dropdown visibility on click
service.addEventListener("click", () => {
    dropdownSelected.style.display =
        dropdownSelected.style.display === "flex" ? "none" : "flex";
});

// If Loading screen hasn't been shown, redirect them to the loading page
if (!localStorage.getItem('hasVisitedLoading')) {
    // Hides home screen info
    htmlSelector.style.display = "none";
    localStorage.setItem('load', 'airpollution.php'); //Enters the HTML file for index into the global variable 'load'
    window.location.href = 'loading.html';
} else {
    //Shows home screen info
    htmlSelector.style.display = "inline";
    localStorage.removeItem('hasVisitedLoading');
    localStorage.removeItem('load'); //Removes Load in general when complete
}

// Check if dark mode or light mode was saved in localStorage
const currentMode = localStorage.getItem('theme');

if (currentMode === 'dark') {
    setDarkMode();
} else {
    setLightMode();
}

function setDarkMode() {
    document.documentElement.style.setProperty('--background-colours', '#121212');
    document.documentElement.style.setProperty('--text-colour', '#e0e0e0');
    document.documentElement.style.setProperty('--hover-colour', '#bb86fc');
    document.documentElement.style.setProperty('--input-background', '#1e1e1e');
    document.documentElement.style.setProperty('--input-text', '#fff');
    document.documentElement.style.setProperty('--hover-options', '#1e1e1e');
}

function setLightMode() {
    document.documentElement.style.setProperty('--background-colours', '#f0f0f0');
    document.documentElement.style.setProperty('--text-colour', 'rgb(25, 80, 91)');
    document.documentElement.style.setProperty('--hover-colour', 'rgb(17, 57, 65)');
    document.documentElement.style.setProperty('--input-background', '#1b1b32');
    document.documentElement.style.setProperty('--input-text', '#0a0a23');
    document.documentElement.style.setProperty('--input-colour', 'white');
    document.documentElement.style.setProperty('--hover-options', '#e1e1e1');
}
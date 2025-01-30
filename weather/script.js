const apiKey = '36c0f65f2f945402cf22bcb06c3ba907';
const weatherButton = document.getElementById('get-weather-btn');
const cityInput = document.getElementById('city-input');
const weatherCont = document.querySelector('.weather-container');


const service = document.getElementById("select-service");
const dropdownSelected = document.getElementById("selected");

const htmlSelector = document.querySelector('html');


weatherButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
        } else {
            displayWeather(data);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayWeather(data) {
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');
    const weatherImage = document.getElementById('weather-image');

    cityName.textContent = `Weather in ${data.name}, ${data.sys.country}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = `Description: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    setWeatherImage(data.weather[0].main.toLowerCase(), weatherImage);
}

// Map weather condition to image
function setWeatherImage(condition, imageElement) {
    const weatherImages = {
        clear: 'clear.png',
        clouds: 'clouds.png',
        drizzle: 'drizzle.png',
        rain: 'rain.png',
        snow: 'snow.png',
        mist: 'mist.png',
        wind: 'wind.png',
        humidity: 'humidity.png',  // Use for specific cases, although it might not be a common condition
        search: 'search.png',      // Set as Default 
    };

    // Set the image source based on the condition
    const imageUrl = `weather/images/${weatherImages[condition] || 'search.png'}`;  // Default to 'search.png' if no match
    imageElement.src = imageUrl;
    imageElement.alt = condition;
}

// Toggle dropdown visibility on click
service.addEventListener("click", () => {
    dropdownSelected.style.display =
        dropdownSelected.style.display === "flex" ? "none" : "flex";
});

// If Loading screen hasn't been shown, redirect them to the loading page
if (!localStorage.getItem('hasVisitedLoading')) {
    // Hides home screen info
    htmlSelector.style.display = "none";
    localStorage.setItem('load', 'weather.php'); //Enters the HTML file for index into the global variable 'load'
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
    darkModeRadio.checked = true;
} else {
    setLightMode();
    lightModeRadio.checked = true;
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
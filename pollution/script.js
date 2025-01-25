const apiKey = "36c0f65f2f945402cf22bcb06c3ba907"; // Replace with your OpenWeatherMap API key

const service = document.getElementById("select-service");
const dropdownSelected = document.getElementById("selected");

const htmlSelector = document.querySelector('html');

async function getAirPollutionData() {
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;

    if (!lat || !lon) {
        alert("Please enter both latitude and longitude.");
        return;
    }

    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <h3>Air Pollution Data:</h3>
            <p>Air Quality Index (AQI): ${data.list[0].main.aqi}</p>
            <p>CO: ${data.list[0].components.co} μg/m³</p>
            <p>NO: ${data.list[0].components.no} μg/m³</p>
            <p>NO₂: ${data.list[0].components.no2} μg/m³</p>
            <p>O₃: ${data.list[0].components.o3} μg/m³</p>
            <p>SO₂: ${data.list[0].components.so2} μg/m³</p>
            <p>PM2.5: ${data.list[0].components.pm2_5} μg/m³</p>
            <p>PM10: ${data.list[0].components.pm10} μg/m³</p>
            <p>NH₃: ${data.list[0].components.nh3} μg/m³</p>
        `;
    } catch (error) {
        alert("Error fetching data. Please try again.");
        console.error(error);
    }
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
    localStorage.setItem('load', 'airpollution.php'); //Enters the HTML file for index into the global variable 'load'
    window.location.href = 'loading.html';
} else {
    //Shows home screen info
    htmlSelector.style.display = "inline";
    localStorage.removeItem('hasVisitedLoading');
    localStorage.removeItem('load'); //Removes Load in general when complete
}

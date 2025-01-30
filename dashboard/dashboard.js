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
    localStorage.setItem('load', 'dashboard.php'); //Enters the HTML file for index into the global variable 'load'
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
    document.documentElement.style.setProperty('--input-box', '#333');
    document.documentElement.style.setProperty('--input-text', '#fff');
}

function setLightMode() {
    document.documentElement.style.setProperty('--background-colours', '#f0f0f0');
    document.documentElement.style.setProperty('--text-colour', 'rgb(25, 80, 91)');
    document.documentElement.style.setProperty('--hover-colour', 'rgb(17, 57, 65)');
    document.documentElement.style.setProperty('--input-background', '#1b1b32');
    document.documentElement.style.setProperty('--input-box', '#fff');
    document.documentElement.style.setProperty('--input-colour', '#0a0a23');
}
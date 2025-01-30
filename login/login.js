const htmlSelector = document.querySelector('html');

// If Loading screen hasn't been shown, redirect them to the loading page
if (!localStorage.getItem('hasVisitedLoading')) {
    // Hides home screen info
    htmlSelector.style.display = "none";
    localStorage.setItem('load', 'login.html'); //Enters the HTML file for index into the global variable 'load'
    window.location.href = 'loading.html';
} else {
    //Shows home screen info
    htmlSelector.style.display = "inline";
    localStorage.removeItem('hasVisitedLoading');
    localStorage.removeItem('load'); //Removes Load in general when complete
}

document.addEventListener("DOMContentLoaded", () => {
    // Disable right-click
    document.addEventListener("contextmenu", (event) => event.preventDefault());

    // Disable common developer shortcuts
    document.addEventListener("keydown", (event) => {
        if (
            (event.ctrlKey && event.key.toLowerCase() === "u") || // Ctrl + U (View Source)
            (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "i") // Ctrl + Shift + I (DevTools)
        ) {
            event.preventDefault();
        }
    });
});
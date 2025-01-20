window.addEventListener('load', () => {
    // Set a flag in localStorage indicating the loading screen has been shown
    localStorage.setItem('hasVisitedLoading', 'true');
    // Delay for the loading screen (e.g., 3 seconds)
    setTimeout(function () {
        // Redirect to index.html after the delay
        window.location.href = localStorage.getItem('load');
    }, 3000);
});
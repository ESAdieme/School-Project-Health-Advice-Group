const htmlSelector = document.querySelector('html');

// If Loading screen hasn't been shown, redirect them to the loading page
if (!localStorage.getItem('hasVisitedLoading')) {
    // Hides home screen info
    htmlSelector.style.display = "none";
    localStorage.setItem('load', 'signup.html'); //Enters the HTML file for index into the global variable 'load'
    window.location.href = 'loading.html';
} else {
    //Shows home screen info
    htmlSelector.style.display = "inline";
    localStorage.removeItem('hasVisitedLoading');
    localStorage.removeItem('load'); //Removes Load in general when complete
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".signup-form");
    const firstName = document.querySelector("input[name='firstName']");
    const lastName = document.querySelector("input[name='lastName']");
    const email = document.querySelector("input[name='gmail']");
    const username = document.querySelector("input[name='username']");
    const password = document.querySelector("input[name='password']");
    const repassword = document.querySelector("input[name='repassword']");

    // Function to sanitise input
    function sanitiseInput(value) {
        return value.replace(/[<>\/\\'";]/g, "");
    }

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    form.addEventListener("submit", function (event) {
        // Sanitize inputs
        firstName.value = sanitiseInput(firstName.value);
        lastName.value = sanitiseInput(lastName.value);
        email.value = sanitiseInput(email.value);
        username.value = sanitiseInput(username.value);

        // Validate email format
        if (!isValidEmail(email.value)) {
            alert("Invalid email format.");
            event.preventDefault();
            return;
        }

        // Validate password length
        if (password.value.length < 6) {
            alert("Password must be at least 6 characters long.");
            event.preventDefault();
            return;
        }

        // Check if passwords match
        if (password.value !== repassword.value) {
            alert("Passwords do not match.");
            event.preventDefault();
        }
    });

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

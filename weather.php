<?php
// Start the session
session_start();

// Check if the user is logged in
if (!isset($_SESSION["user_id"])) {
    // Redirect to login page if not logged in
    header("Location: login.html");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Health Advice Group - Weather</title>
    <link rel="stylesheet" href="weather/weather.css">
    <link rel="shortcut icon" href="https://en.wikifur.com/w/images/3/39/Knuckles_%282D%29.png">
</head>

<body>
    <header>
        <section class="headlines">
            <div class="headers">
                <img src="home/images/logo.png" id="logo" />
                <nav class="nav-links">
                    <ul>
                        <li><a href="index.html" id="aboutUs">Home</a></li>
                        <li style="position: relative;">
                            <a id="select-service">Dashboard Options</a>
                            <div class="selected" id="selected">
                                <ul>
                                    <li><a href="dashboard.php">Dashboard</a></li>
                                    <li><a href="airpollution.php">Air Quality</a></li>
                                    <li><a href="#">Health Advice</a></li>
                            </div>
                        </li>
                        <li><a href="#" id="reviews">Settings</a></li>
                        <li><a href="logout.php" id="contactUs">Log out</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    </header>
    <main>
        <div class="weather-container">
            <h1>Weather App</h1>
            <input type="text" id="city-input" placeholder="Enter City">
            <button id="get-weather-btn">Get Weather</button>
            <div id="weather-info">
                <!-- Add this inside the #weather-info div in your HTML -->
                <h2 id="city-name"></h2>
                <p id="temperature"></p>
                <p id="description"></p>
                <p id="humidity"></p>
                <p id="wind-speed"></p>
                <img id="weather-image" src="weather/images/search.png" alt="Weather Image"
                    style="max-width: 200px; margin-top: 20px;" />
            </div>
        </div>
    </main>

    <script src="weather/script.js"></script>
</body>

</html>
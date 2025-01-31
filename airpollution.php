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
    <title>Health Advice Group - Air Pollution</title>
    <link rel="stylesheet" href="pollution/style.css">
    <link rel="shortcut icon"
        href="home/images/logo.png">
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
                                    <li><a href="weather.php">Weather Forecasting</a></li>
                                    <li><a href="dashboard.php">Dashboard</a></li>
                                    <li><a href="healthadvice.php">Health Advice</a></li>
                            </div>
                        </li>
                        <li><a href="settings.php" id="reviews">Settings</a></li>
                        <li><a href="logout.php" id="contactUs">Log out</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    </header>
    <main>
        <div class="container">
            <h1>Air Pollution Data</h1>
            <p class="instructions">Enter Latitude and Longitude to retrieve air quality information.</p>
            <div class="input-section">
                <input type="text" id="latitude" placeholder="Latitude">
                <input type="text" id="longitude" placeholder="Longitude">
                <button onclick="getAirPollutionData()">Get Data</button>
            </div>
            <div class="result" id="result">
                <!-- Air Pollution goes here -->
            </div>
        </div>
        <script src="pollution/script.js"></script>
    </main>
</body>

</html>
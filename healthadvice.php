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
    <title>Health Advice Group - Health Advice</title>
    <link rel="stylesheet" href="healthAdvice/healthAdvice.css" />
    <link rel="shortcut icon"
        href="https://static.wikia.nocookie.net/idwsonic/images/e/ed/Metal_Sonic.PNG/revision/latest?cb=20210710201229" />
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
                                    <li><a href="airpollution.php">Air Quality</a></li>
                                    <li><a href="dashboard.php">Dashboard</a></li>
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
        <section class="main-site">
            <div class="title">
                <h1>Stay Safe and Healthy: Expert Advice on Managing Extreme Weather and Environmental Health Conditions
                </h1>
                <p> Our Health Advice Group is dedicated to providing you with essential information on how to protect
                    yourself from extreme weather temperatures and seasonal environmental health conditions. Whether
                    it’s the blistering heat of summer or the freezing cold of winter, we offer tips on how to stay
                    safe, hydrated, and comfortable in extreme conditions. We also provide valuable insights into
                    managing seasonal allergies like asthma and hay fever, helping you minimize symptoms and enjoy every
                    season to its fullest. Explore our comprehensive resources on how to cope with the environmental
                    changes around you, from weather-related health risks to effective allergy management. Stay
                    informed, stay safe!</p>
            </div>
            <div class="health-video">
                <video width="600" height="600" controls>
                    <source src="healthAdvice/videos/extreme_heat_tips.mp4" type="video/mp4">
                </video>
            </div>
            <div class="health-video">
                <video width="600" height="600" controls>
                    <source src="healthAdvice/videos/Allergic Rhinitis.mp4" type="video/mp4">
                </video>
            </div>
        </section>
    </main>
    <script src="healthAdvice/script.js"></script>
</body>
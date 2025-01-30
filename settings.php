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
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="settings/style.css" />
        <link rel="shortcut icon" href="home/images/logo.png" />
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
                                    <li><a href="#">Health Advice</a></li>
                            </div>
                        </li>
                        <li><a href="dashboard.php" id="reviews">Dashboard</a></li>
                        <li><a href="logout.php" id="contactUs">Log out</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    </header>
    <main>
        <section class="button-choice" id="button-choice">
            <div class="buttons">
                <ul>
                    <li><a href="#" id="option-1">Account</a></li>
                    <li><a href="#" id="option-2">Appearance</a></li>
                    <li><a href="#" id="option-3">Privacy</a></li>
                    <li><a href="#" id="option-4">About</a></li>
                </ul>
            </div>
        </section>
        <section class="text-editior" id="text-editior">
            <div class="text-box" id="text">
                
            </div>
        </section>
    </main>
    <script src="settings/script.js"></script>
    </body>
</html>
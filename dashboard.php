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
    <title>Health Advice Group - Dashboard</title>
    <link rel="stylesheet" href="dashboard/dashboard.css" />
    <link rel="shortcut icon"
        href="https://en.wikifur.com/w/images/thumb/f/f0/Sonicchannel_amy_nocircle.png/366px-Sonicchannel_amy_nocircle.png" />
</head>

<body>
    <header>
        <section class="headlines">
            <div class="headers">
                <img src="home/images/logo.png" id="logo" />
                <nav class="nav-links">
                    <ul>
                        <li style="position: relative;">
                            <a id="select-service">Dashboard Options</a>
                            <div class="selected" id="selected">
                                <ul>
                                    <li><a href="#">Weather Forecasting</a></li>
                                    <li><a href="#">Air Quality</a></li>
                                    <li><a href="#">Health Advice</a></li>
                            </div>
                        </li>
                        <li><a href="#" id="aboutUs">About Us</a></li>
                        <li><a href="#" id="reviews">Reviews</a></li>
                        <li><a href="#contact" id="contactUs">Contact Us</a></li>
                        <li><a href="logout.php" id="contactUs">Log out</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    </header>
    <main>
        <section class="main-site">
            <div class="welcome">
                <h1>Welcome, <?php echo htmlspecialchars($_SESSION["first_name"]); ?>
                    <?php echo htmlspecialchars($_SESSION['last_name'])?>!</h1>
            </div>
        </section>
        <script src="dashboard/script.js"></script>
</body>

</html>
<?php
// Start the session to check if user is logged in
session_start();

$mysqli = require __DIR__ . '/../database.php';  // Correct path


// Check if user is logged in
if (!isset($_SESSION["user_id"])) {
    // Redirect to login page if not logged in
    header("Location: ../login.html");
    exit;
}

// Get the user ID from the session
$user_id = $_SESSION["user_id"];

// Handle form submission to update user settings
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input data to prevent SQL injection
    $username = mysqli_real_escape_string($mysqli, $_POST['username']);
    $first_name = mysqli_real_escape_string($mysqli, $_POST['firstName']);
    $last_name = mysqli_real_escape_string($mysqli, $_POST['lastName']);
    $password = mysqli_real_escape_string($mysqli, $_POST['password']);
    $email = mysqli_real_escape_string($mysqli, $_POST['email']);
    
    // Encrypt password if it's provided
    if (!empty($password)) {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    } else {
        // If password is empty, do not change the password
        $hashed_password = null;
    }

    // Update user information in the database
    if ($hashed_password) {
        // Update username, first name, last name, and password
        $sql = "UPDATE user_information SET Username = '$username', First_name = '$first_name', Last_name = '$last_name', Password = '$hashed_password', email = '$email' WHERE User_ID = '$user_id'";
    } else {
        // Update only username, first name, and last name (password not updated)
        $sql = "UPDATE user_information SET Username = '$username', First_name = '$first_name', Last_name = '$last_name', email = '$email' WHERE User_ID = '$user_id'";
    }

    if ($mysqli->query($sql) === TRUE) {
        echo "<script>alert('Information successfully changed')</script>";
        header("Location: ../settings.php");
    } else {
        header("Location: error.php");
    }
}

// Close the database connection
$mysqli->close();
?>
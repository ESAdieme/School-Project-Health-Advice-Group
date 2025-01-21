<?php

$is_invalid = false;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    // Database connection
    $mysqli = require __DIR__ . "Service/database.php";
    
    // Prepare the SQL query to prevent SQL injection
    $sql = sprintf("SELECT * FROM user_information
                    WHERE Username = '%s'",
                   $mysqli->real_escape_string($_POST["username"]));
    
    // Execute the query
    $result = $mysqli->query($sql);
    
    // Fetch the user record
    $user = $result->fetch_assoc();
    
    // Check if the user exists and password is correct
    if ($user) {
        
        if (password_verify($_POST["password"], $user["Password"])) {
            
            // Start session and regenerate session ID for security
            session_start();
            session_regenerate_id();
            
            // Store user details in session
            $_SESSION["user_id"] = $user["User_ID"];
            $_SESSION["username"] = $user["Username"];
            $_SESSION["first_name"] = $user["First_Name"];
            $_SESSION["last_name"] = $user["Last_Name"];
            $_SESSION["email"] = $user["email"];
            
            // Redirect to index page
            echo"login successful";
            exit;
        }
    }
    else{
    echo"login failed";
    }
}

?>

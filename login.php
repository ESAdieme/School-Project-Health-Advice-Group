<?php
$is_invalid = false;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    
    $mysqli = require __DIR__ . "/database.php";
    
    // Prepare the SQL quy to prevent SQL injection
    $sql = sprintf("SELECT * FROM user_information
                    WHERE Username = '%s'",
                   $mysqli->real_escape_string($_POST["username"]));
    

    $result = $mysqli->query($sql);
    

    $user = $result->fetch_assoc();
    
    // Check if the user exists and password is correct
    if ($user) {
        
        if (password_verify($_POST["password"], $user["Password"])) {
            
            $user_id = $user["User_ID"];
            $sql_user_data = sprintf("SELECT * FROM user_data WHERE User_ID = '%s'", 
                                      $mysqli->real_escape_string($user_id));
            $result_user_data = $mysqli->query($sql_user_data);
            $user_data = $result_user_data->fetch_assoc();
            
            // Start session and regenerate session ID for security
            session_start();
            session_regenerate_id();
            
            // Store user details and user_data in session
            $_SESSION["user_id"] = $user["User_ID"];
            $_SESSION["username"] = $user["Username"];
            $_SESSION["first_name"] = $user["First_name"];
            $_SESSION["last_name"] = $user["Last_name"];
            $_SESSION["email"] = $user["email"];
            
            // Store additional user data (Data_ID, healthAdvice) in session
            $_SESSION["data_id"] = $user_data["Data_ID"];
            $_SESSION["health_advice"] = $user_data["healthAdvice"];
            
            // Redirect to dashboard page
            header("Location: dashboard.php");
            exit;
        } else {
            header("Location: ./services/error.php");
        }
    } else {
        // User not found
        header("Location: error.php");
    }
}

?>
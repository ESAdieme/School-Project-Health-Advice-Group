<?php 
    $mysqli = require __DIR__ . "/database.php";

    // Get the form data
    $userID = uniqid();
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['gmail'];
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Prepare the SQL query to insert data into the user_information table
    $sql_user_info = "INSERT INTO user_information (User_ID, First_name, Last_name, email, Username, Password) 
                      VALUES ('$userID', '$firstName', '$lastName', '$email', '$username', '$password')";

    // Execute the query for user_information table
    if ($mysqli->query($sql_user_info) === TRUE) {
        // Now insert into the user_data table, linking with the same User_ID
        $sql_user_data = "INSERT INTO user_data (Data_ID, User_ID, healthAdvice) 
                          VALUES (UUID(), '$userID', 'General Health Advice')";

        if ($mysqli->query($sql_user_data) === TRUE) {
            echo "New record created successfully in both tables";
            header("Location: login.html");
            exit;
        } else {
            echo "Error inserting data into user_data: " . $mysqli->error;
        }
    } else {
        echo "Error inserting into user_information: " . $mysqli->error;
    }

    // Close the database connection
    $mysqli->close();
?>
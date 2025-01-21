<?php 

    $db_server = "localhost";
    $db_user = "root";
    $db_pass = "";
    $db_name = "healthadvicegroup";
    $conn = "";


    $conn = new mysqli($db_server, $db_user, $db_pass, $db_name);

    // Check for any connection errors
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get the form data
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['gmail'];
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Prepare the SQL query to inNamesert data into the customer table
    $sql = "INSERT INTO user_information (First_name, Last_name, email, Username, Password) 
    VALUES ('$firstName', '$lastName', '$email', '$username', '$password')";

    // Execute the query and check if data is inserted successfully
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
        header("Location: login.html");
        exit;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
?>
<?php 
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 Page Not Found</title>
    <link rel="stylesheet" href="../error/style.css">
</head>

<body>
    <div class="container">
        <div class="content">
            <h1>Oops! 404 Error</h1>
            <p><?php 
        $mysqli = require __DIR__ . "/../database.php";
      echo "Error! ". $mysqli->error; 
      ?></p>
            <a href="../index.html" class="back-home">Go Back to Home</a>
        </div>
    </div>
</body>

</html>
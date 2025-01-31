<?php

session_start();

if(!isset($_SESSION["user_id"])){
    header("Location: ../signup.html");
    exit;
}else if(isset($_SESSION["user_id"])){
    header("Location: ../dashboard.php");
    exit;
}
?>
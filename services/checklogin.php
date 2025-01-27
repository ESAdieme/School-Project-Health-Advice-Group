<?php

session_start();

if(isset($_SESSION["user_id"])){
    header("Location: ../dashboard.php");
    exit;
}else if(!isset($_SESSION["user_id"])){
    header("Location: ../login.html");
    exit;
}
?>
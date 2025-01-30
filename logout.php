<?php
session_start();
session_unset(); // Remove all session variables, basically removing all login data collected from the client side
session_destroy(); // Destroy the session, ending connection between the server and the client

// Redirect to back to Home screen
header("Location: index.html");
exit;
?>

<script>
localStorage.removeItem('theme');
</script>
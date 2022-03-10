<?php
$servername = "localhost";
$username = "sh85387_lorg";
$password = "~ih1G1q3";
$dbname = "sh85387_lorgglaschu";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
print_r($_POST);
if(!isset($_POST['data']) || !isset($_POST['valuation']))
    die("error");

// prepare and bind
$stmt = $conn->prepare("INSERT INTO stats (objdata, valuation) VALUES (?, ?)");
$stmt->bind_param("si", $_POST['data'], $_POST['valuation']);

// set parameters and execute
$stmt->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();
?>
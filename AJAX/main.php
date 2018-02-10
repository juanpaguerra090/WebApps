<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "webapp";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT ID, LOCAL, LOCAL_SCORE, VISITOR , VISITOR_SCORE FROM PARTIDO";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	//create an array
    $emparray = array();
    // output data of each row
    while($row = $result->fetch_assoc()) {
		//echo $row[ID]. " - " . $row["LOCAL"]. " ". $row["LOCAL_SCORE"]. " ". $row["VISITOR"]. " ". $row["VISITOR_SCORE"] . "<br>";	
		$emparray[] = $row;
	}
	echo json_encode($emparray);

} else {
    echo "0 results";
}
$conn->close();
?>
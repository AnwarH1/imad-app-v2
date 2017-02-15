<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "", "Fitness");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Escape user inputs for security
$name = mysqli_real_escape_string($link, $_REQUEST['Name']);
$age = mysqli_real_escape_string($link, $_REQUEST['Age']);
$email = mysqli_real_escape_string($link, $_REQUEST['Email']);
$height=mysqli_real_escape_string($link, $_REQUEST['Height']);
$weight=mysqli_real_escape_string($link, $_REQUEST['Weight']);
$occupation=mysqli_real_escape_string($link, $_REQUEST['Occupation']);
// attempt insert query execution
$sql = "INSERT INTO User_info(Uname, Uage,Uid,Uheight,Uweight,Uoccupation) VALUES ('$name', '$age', '$email','$height','$weight','$occupation')";
if(mysqli_query($link, $sql)){
    echo "Your signup has completed";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// close connection
mysqli_close($link);
?>
<?php
$fileName = $_REQUEST["email"];
$fileToSearch = "../students/" . $fileName . ".sa";
    
if (file_exists($fileToSearch)) {
   echo "<span style='color:green'>Student " . $fileName . " exists</span>";
}
else{
    echo "<span style='color:red'>Student does not exist</span>";
}
?>
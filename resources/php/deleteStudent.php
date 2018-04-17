<?php
$fileName = $_REQUEST["email"];
$fileToSearch = "../data/students/" . $fileName . ".sa";
    
if (file_exists($fileToSearch)) {
    unlink($fileToSearch);
    echo "<span style='color:green'>File Deleted</span>";
    }
else{
    echo "<span style='color:red'>File Not Found</span>";
}
?>

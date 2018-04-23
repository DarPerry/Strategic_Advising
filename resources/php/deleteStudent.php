<!--

Name :  Delete_Student_PHP
Author:  Darius Perry
Created: February 20, 2018
Review :
Description: This class is the PHP logic for deleting a student.

-->




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

/*
Name :  Search_Student_PHP
Author:  Darius Perry
Created: February 22, 2018
Review :
Description: This class is the PHP logic for searching for a student. Students are saved as files.
*/

<?php
$fileName = $_REQUEST["id"];
$fileToSearch = "../data/students/" . $fileName . ".sa";
    
if (file_exists($fileToSearch)) {
   echo "existingFile";
}
else{
    echo "newFile";
}
?>
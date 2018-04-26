/*
Name :  File_Search_PHP
Author:  Darius Perry
Created: February 20, 2018
Review :
Description: This class is the PHP logic for searching through student files.
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
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
<?php
$fileName = $_REQUEST["email"];
$fileToSearch = "../students/" . $fileName . ".sa";
    
if (file_exists($fileToSearch)) {
   echo "existingFile";
}
else{
    echo "newFile";
}
?>
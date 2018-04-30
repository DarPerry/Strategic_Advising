<?php
/*
Name :  Delete_Student_PHP
Author:  Darius Perry
Created: February 20, 2018
Review :
Description: This class is the PHP logic for deleting a student.
*/

$studentInfo     = $_REQUEST['student_info'];
$studentId    = $_REQUEST['student_id'];

if (file_exists("../data/students/" . $studentId . ".sa")) {
        $fp = fopen("../data/students/" . $studentId  . ".sa", 'wb');
        fwrite($fp, $studentInfo);
    echo "Your New Student Has Been Saved";
    
} else {
    $fp = fopen("../data/students/" . $studentId  . ".sa", 'wb');
    fwrite($fp, $studentInfo);
    echo "newStudent";
}
?>

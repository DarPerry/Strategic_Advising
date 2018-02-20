<?php
$studentInfo = $_POST['student_info'];
$studentEmail = $_POST['student_email'];



$fp = fopen("../students/".$studentEmail.".sa", 'wb');
if (!$fp)
{
    echo 'Student Does Not Exist';
    exit;
} 
else
{
    fwrite($fp, $studentInfo);
    echo "Student Information Has Been Added/Modified";
}
?>
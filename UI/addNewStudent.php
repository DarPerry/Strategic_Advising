<?php
$newStudent = $_POST['email'];
$emptyStudentInfoTemplate = '{"student_name": "", "student_email": "", "id_number" : "" , "expected_graduation": "", "major": "undefined", "concentration": "undefined", "courses_taken": [],  "summer_classes": "false", "early_graduation": "false", "honors_college": "false", "min_credits": , "max_credits": }';

$fp = fopen("../students/".$newStudent.".sa", 'wb');

if (!$fp)
{
    echo '<p><strong>Cannot generate message file</strong></p></body></html>';
    exit;
} 
else
{
fwrite($fp, $emptyStudentInfoTemplate);
echo "<p style='color:green'>New Student Added</p>";
}
?>
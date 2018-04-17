 <?php

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
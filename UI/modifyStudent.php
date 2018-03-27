 <?php


$studentInfo     = $_REQUEST['student_info'];
$studentId    = $_REQUEST['student_id'];

if (file_exists("../students/" . $studentId . ".sa")) {
        $fp = fopen("../students/" . $studentId  . ".sa", 'wb');

        fwrite($fp, $studentInfo);
    echo "Your New Student Has Been Saved";
    //May need to delete file write above
} else {
    $fp = fopen("../students/" . $studentId  . ".sa", 'wb');
    fwrite($fp, $studentInfo);
    echo "newStudent";
}
?> 
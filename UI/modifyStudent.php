 <?php
$studentInfo     = $_POST['student_info'];
$studentEmail    = $_POST['student_email'];
$studentUserName = substr($studentEmail, 0, -8);

if (file_exists("../students/" . $studentUserName . ".sa")) {
        $fp = fopen("../students/" . $studentUserName . ".sa", 'wb');

        fwrite($fp, $studentInfo);
    echo "Your New Student Has Been Saved";
    //May need to delete file write above
} else {
    $fp = fopen("../students/" . $studentUserName . ".sa", 'wb');
    fwrite($fp, $studentInfo);
    echo "newStudent";
}
?> 
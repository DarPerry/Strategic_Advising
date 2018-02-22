 <?php
$studentInfo     = $_POST['student_info'];
$studentEmail    = $_POST['student_email'];
$studentUserName = substr($studentEmail, 0, -8);

if (file_exists("../students/" . $studentUserName . ".sa")) {
    echo "There is already a file for $studentUserName. Please Go Back And Search For Them.";
} else {
    $fp = fopen("../students/" . $studentUserName . ".sa", 'wb');
    fwrite($fp, $studentInfo);
    echo "Student $studentUserName Has Been Added";
}
?> 
<?php
$newStudent = $_POST['email'];

$fp = fopen("../students/".$newStudent.".sa", 'wb');

if (!$fp)
{
    echo '<p><strong>Cannot generate message file</strong></p></body></html>';
    exit;
} 
else
{
fwrite($fp, $newStudent);
echo "New Student Added ";
}
?>
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
$outputstring  = 'Hello, i have been generated by the button';
fwrite($fp, $student);
echo "New Student Added ";
}
?>
/*
Author: Ashlyn King
Created: 04/19/2018
Review:
Description: This class reads in a course catalog file
*/
<?php
$file = fopen("../data/computerScienceTest-catalog.cca", 'rb');
if(!$file)
{
    echo('<p>Cannot generate message file'</p>;
    exit;
}
>
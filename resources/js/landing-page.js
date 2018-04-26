/*
Name :  Landing_Page_JS
Author:  Darius Perry
Created: February 14, 2018
Review :
Description: This class is Javascript logic behind the landing page.
*/

$(document).ready(function () {

    $("#add-student").click(function () {
        sessionStorage.setItem("newStudentMode", "off");
        window.location.href = "add-modify-student.html";
    });

    $("#search-student").click(function () {
        window.location.href = "search-page.html";
    });
});

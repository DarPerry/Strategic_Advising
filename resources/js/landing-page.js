$(document).ready(function () {

    $("#add-student").click(function () {
        sessionStorage.setItem("newStudentMode", "off");
        window.location.href = "add-modify-student.html";
    });

    $("#search-student").click(function () {
        window.location.href = "search-page.html";
    });
});

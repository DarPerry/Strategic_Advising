 $(document).ready(function () {

     $("#search-input").keyup(function () {
         $.ajax({
             url: "resources/php/fileSearch.php",
             data: {
                 id: $("#search-input").val()
             },
             success: function (data) {
                 if (data == "existingFile") {
                     $("#add-new-student").prop('disabled', true);
                     $("#txtHint").html("<p style='color:green'>Student Exisits</p>");
                     $("#add-new-student").css('background-color', "#dddddd");

                     $("#delete-student").css('background-color', "#BA0C2F");
                     $("#delete-student").prop('disabled', false);

                     $("#view-modify-student").css('background-color', "#BA0C2F");
                     $("#view-modify-student").prop('disabled', false);


                 } else if (data == "newFile" || $("#search-input").val() == "") {
                     $("#add-new-student").prop('disabled', false);
                     $("#txtHint").html("<p style='color:red'>Student Does Not Exisit</p>");
                     $("#add-new-student").css('background-color', "#BA0C2F");

                     $("#delete-student").css('background-color', "#dddddd");
                     $("#delete-student").prop('disabled', true);

                     $("#view-modify-student").css('background-color', "#dddddd");
                     $("#view-modify-student").prop('disabled', true);
                 }
             }
         }, );
     })

     document.getElementById("form").reset();

     $("#add-new-student").prop('disabled', true);
     $("#add-new-student").css('background-color', "#dddddd");

     $("#delete-student").prop('disabled', true);
     $("#delete-student").css('background-color', "#dddddd");

     $("#view-modify-student").prop('disabled', true);
     $("#view-modify-student").css('background-color', "#dddddd");

     $('#add-new-student').click(function () {
         sessionStorage.setItem("newStudentMode", "true");
         if ($('#search-input').val() !== '') { //check name field have some value
             $.ajax({
                 url: "resources/php/addNewStudent.php",
                 data: {
                     id: $("#search-input").val()
                 },
                 success: function (data) {
                     $('#txtHint').html(data);
                     sessionStorage.setItem("newStudentId", $('#search-input').val())
                     sessionStorage.setItem("studentInformation", null);
                     window.location.href = "add-modify-student.html";

                 }
             });
         }
     });

     $("#delete-student").click(function () {
         if (window.confirm("Are you sure you want to delete this Student? \n\n'OK' to continue.")) {
             if ($('#search-input').val() !== '') {
                 $.ajax({
                     url: "resources/php/deleteStudent.php",
                     data: {
                         email: $("#search-input").val()
                     },
                     sucess: function (data) {
                         $("#txtHint").html(data);
                     }
                 });
             }
             $("#search-input").val("");
             $("#txtHint").html("");
         }
     });

     $("#view-modify-student").click(function () {
         sessionStorage.setItem("newStudentMode", "false");

         $.ajax({
             url: "resources/data/students/" + $('#search-input').val() + ".sa",
             success: function (data) {
                 sessionStorage.setItem("studentInformation", data);
                 sessionStorage.setItem("newStudentId", $('#search-input').val())
             },
             async: false // <- this turns it into synchronous
         });
         window.location.href = "add-modify-student.html";
     });

     $("#home").click(function () {
         window.location.href = "landing-page.html"
     })
 });

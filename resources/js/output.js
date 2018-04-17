 function ReadTemplate(templateName) {
     var template = "";

     $.ajax({
         url: "resources/data/templates/" + templateName + ".tmp",
         success: function (data) {
             template = data;
         },
         async: false
     });
     return template;
 }

 function GetHonorsSchedule(studentInfo) {
     var tableString = "";

     if (studentInfo.major == "Computer Science") {
         tableString = ReadTemplate("Honors_ComputerScience");
     } else if (studentInfo.major == "Actuarial Mathematics") {
         tableString = ReadTemplate("Honors_ActuarialMath");
     } else if (studentInfo.major == "Mathematical Science" && studentInfo.concentration == "Math") {
         tableString = ReadTemplate("Honors_MathScience_Math");
     } else if (studentInfo.major == "Mathematical Science" && studentInfo.concentration == "Applied Science") {
         tableString = ReadTemplate("Honors_MathScience_AppliedScience");
     } else if (studentInfo.major == "Mathematics Teaching" && studentInfo.concentration == "Middle School") {
         tableString = ReadTemplate("Honors_Teaching_MiddleSchool");
     } else if (studentInfo.major == "Mathematics Teaching" && studentInfo.concentration == "Secondary School") {
         tableString = ReadTemplate("Honors_Teaching_SecondarySchool");
     }
     return tableString
 }

 function GetStudentSchedule(studentInfo) {
     var tableString = "";

     if (studentInfo.major == "Computer Science") {
         tableString = ReadTemplate("ComputerScience");
     } else if (studentInfo.major == "Actuarial Mathematics") {
         tableString = ReadTemplate("ActuarialMath");
     } else if (studentInfo.major == "Mathematical Science" && studentInfo.concentration == "Math") {
         tableString = ReadTemplate("MathScience_Math");
     } else if (studentInfo.major == "Mathematical Science" && studentInfo.concentration == "Applied Science") {
         tableString = ReadTemplate("MathScience_AppliedScience");
     } else if (studentInfo.major == "Mathematics Teaching" && studentInfo.concentration == "Middle School") {
         tableString = ReadTemplate("Teaching_MiddleSchool");
     } else if (studentInfo.major == "Mathematics Teaching" && studentInfo.concentration == "Secondary School") {
         tableString = ReadTemplate("Teaching_SecondarySchool");
     }
     return tableString
 }

 function FillHeaderInformation(jsonStudentInfo) {
     $("#nameHeader").val(jsonStudentInfo.student_name);
     $("#majorHeader").val(jsonStudentInfo.major);
     $("#minCreditsHeader").val("Min. Credits: " + jsonStudentInfo.min_credits);
     $("#maxCreditsHeader").val("Max. Credits: " + jsonStudentInfo.max_credits);
     $("#expectedGradHeader").val("Exp. Grad: " + jsonStudentInfo.expected_graduation);

     (jsonStudentInfo.honors_college != "false" ? $("#honorsHeader").val("Honors Student") : $("#honorsHeader").hide());
     (jsonStudentInfo.early_graduation != "false" ? $("#earlyGradHeader").val("Early Graduation") : $("#earlyGradHeader").hide());
     (jsonStudentInfo.concentration != "undefined" ? $("#concHeader").val(jsonStudentInfo.concentration) : $("#concHeader").hide());

     $("input").attr("disabled", true);
 }

 function CheckCreditLimits(studentInfo) {
     var minimumCredits = studentInfo.min_credits;
     var maximumCredits = studentInfo.max_credits;
     var total = 0;
     $("tbody").each(function () {
         $(this).find(".credits").each(function () {
             total += parseInt($(this).html());
         });
         $(this).parent().find("#totalCredits").html(total);
         total = 0;

         if ($(this).parent().find("#totalCredits").html() < minimumCredits || $(this).parent().find("#totalCredits").html() > maximumCredits) {
             $(this).parent().find("#totalCredits").addClass("caution");
         } else {
             $(this).parent().find("#totalCredits").removeClass("caution");
         }
     });
 }

 function emailTo() {
     $.ajax({
         url: "resources/data/students/" + sessionStorage.getItem("newStudentId") + ".sa",
         success: function (data) {
             sessionStorage.setItem("studentInformation", data);
         },
         async: false // <- this turns it into synchronous
     });

     var studentObject = sessionStorage.getItem("studentInformation");
     var studentInfo = JSON.parse(studentObject);

     var input = document.getElementById('email');
     email = studentInfo.student_email;
     var input = document.getElementById('subject');
     subject = window.prompt("Email Subject:");

     window.location.href = "mailto:" + email + "?subject=" + subject;
 }

 function CalculateAndDisplayCreditHours() {
     var total = 0;
     var runningTotal = 0;
     $("tbody").each(function () {
         $(this).find(".credits").each(function () {
             total += parseInt($(this).html());
             runningTotal += parseInt($(this).html());
         });
         $(this).parent().find("#totalCredits").html(total);
         total = 0;
     })


     $("#runningCreditTotal").val("Total Credits: " + runningTotal);
 }

 var tablesToExcel = (function () {
     var uri = 'data:application/vnd.ms-excel;base64,',
         template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets>',
         templateend = '</x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head>',
         body = '<body>',
         tablevar = '<table>{table',
         tablevarend = '}</table>',
         bodyend = '</body></html>',
         worksheet = '<x:ExcelWorksheet><x:Name>',
         worksheetend = '</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>',
         worksheetvar = '{worksheet',
         worksheetvarend = '}',
         base64 = function (s) {
             return window.btoa(unescape(encodeURIComponent(s)))
         },
         format = function (s, c) {
             return s.replace(/{(\w+)}/g, function (m, p) {
                 return c[p];
             })
         },
         wstemplate = '',
         tabletemplate = '';

     return function (table, name, filename) {
         var tables = table;

         for (var i = 0; i < tables.length; ++i) {
             wstemplate += worksheet + worksheetvar + i + worksheetvarend + worksheetend;
             tabletemplate += tablevar + i + tablevarend;
         }

         var allTemplate = template + wstemplate + templateend;
         var allWorksheet = body + tabletemplate + bodyend;
         var allOfIt = allTemplate + allWorksheet;

         var ctx = {};
         for (var j = 0; j < tables.length; ++j) {
             ctx['worksheet' + j] = name[j];
         }

         for (var k = 0; k < tables.length; ++k) {
             var exceltable;
             if (!tables[k].nodeType) exceltable = document.getElementById(tables[k]);
             ctx['table' + k] = exceltable.innerHTML;
         }

         window.location.href = uri + base64(format(allOfIt, ctx));

     }
 })();


 $(document).ready(function () {

     
     var editMode = false;
     var editIconClickCount = 0;

     var rawCatalogData = "";

     $.ajax({
         url: "resources/data/course-catalog.cpl",
         success: function (data) {
             rawCatalogData = data;
         },
         async: false // <- this turns it into synchronous
     });

     var parsedCatalogData = JSON.parse(rawCatalogData);
     var sessionStudentInformation = sessionStorage.getItem("studentInformation");
     var parsedStudentInformation = JSON.parse(sessionStudentInformation);

     FillHeaderInformation(parsedStudentInformation);


     var splitCoursesTaken = new Array();
     parsedStudentInformation.courses_taken.forEach(function (courseTaken) {
         splitCoursesTaken.push(courseTaken.split("_").join(""));
     });


     $("div").on("click", ".tempTable", function () {
         $(this).after("<table><thead><tr><th>Course Number</th><th>Course Title</th><th>Credits</th></tr></thead><tbody id='droppable' class= 'ui-droppable'><tr><td></td><td></td><td></td></tr></tbody><tfoot><tr><td colspan='2'>Total Credits:</td><td id='totalCredits'>0</td></tr></tfoot></table>");

         $(this).remove();
         $("tbody").droppable({

             drop: function (event, ui) {
                 var $thisVar = $(this);
                 var courseIndex = 0;
                 var $allCourses = $(".number")

                 parsedCatalogData.forEach(function (course) {
                     if (course.number == $("#draggable").find(".number").html()) {
                         var numberOfPrereqs = 0;
                         var allowCourseHere = null;
                         var plannedCourse = new Array();
                         var courseIndex = $(".yearPlan").find("tbody .number").index($thisVar.find(".number:last"))
                         $(".number").slice(0, courseIndex + 1 - $thisVar.find(".number").length).each(function () {
                             plannedCourse.push($(this).html())
                         });

                         course.prereqs.forEach(function (prereq) {
                             if (splitCoursesTaken.includes(prereq) || plannedCourse.includes(prereq)) {
                                 $("#draggable").find("td").removeClass("cautionCourse");
                             } else {
                                 allowCourseHere = "ERROR: The Prereqs for this course have not yet been taken. (" + course.prereqs + ")";
                                 $("#draggable").find("td").addClass("cautionCourse");
                                 alert(allowCourseHere)
                             }
                         })
                     }
                 })

                 $(this).append("<tr>" + $("#draggable").html() + "</tr>");
                 $("#draggable").remove();

                 CheckCreditLimits(parsedStudentInformation);
                 FillHeaderInformation(parsedStudentInformation);

                 if ($(this).find("tr td").first().val() == "") {
                     $(this).find("tr").first().remove();
                 }
             }
         })
     });

     if (parsedStudentInformation.schedule.length != 0) {
         var tableString = "";
         var yearInt = 1;
         var studentStanding = "";
         parsedStudentInformation.schedule.forEach(function (e) {
             if (yearInt == 1) {
                 studentStanding = "Freshman";
             } else if (yearInt == 2) {
                 studentStanding = "Sophmore";
             } else if (yearInt == 3) {
                 studentStanding = "Junior";
             } else if (yearInt == 4) {
                 studentStanding = "Senior";
             }
             tableString += "<div id='year" + yearInt + "' class='yearPlan'><h2>" + studentStanding + "</h2>"
             yearInt++;
             e.year.forEach(function (f) {
                 tableString += "<table><thead><tr><th>Course Number</th><th>Course Title</th><th>Credits</th></tr></thead><tbody id='droppable'><tr>"
                 f.forEach(function (g) {
                     tableString += "<td class='number'>" + g + "</td><td class='title'></td><td class='credits'></td></tr>"
                 })
                 tableString += "</tbody><tfoot><tr><td colspan='2'>Total Credits:</td><td id='totalCredits'></td></tr></tfoot></table>";
             })
             tableString += "</div>"
         })
     } else {
         if (parsedStudentInformation.honors_college == "true") {
             tableString = GetHonorsSchedule(parsedStudentInformation)
         } else {
             tableString = GetStudentSchedule(parsedStudentInformation)
         }
     }

     $("#container").append(tableString);

     $.ajax({
         url: "resources/data/course-catalog.cpl",
         success: function (data) {
             var catalogData = JSON.parse(data)
             $(".number").each(function (a) {
                 catalogData.forEach(function (x) {
                     if ($(".number").eq(a).html() == x.number) {
                         $(".number").eq(a).parent().find(".credits").html(x.credits)
                         $(".number").eq(a).parent().find(".title").html(x.name)
                     } else if ($(".number").eq(a).html() == "CS") {
                         $(".number").eq(a).parent().find(".credits").html("3")
                         $(".number").eq(a).parent().find(".title").html("Computer Science Elective")
                     } else if ($(".number").eq(a).html() == "GEN") {
                         $(".number").eq(a).parent().find(".credits").html("3")
                         $(".number").eq(a).parent().find(".title").html("General Elective")
                     }
                 })

             })
         },
     });

     CalculateAndDisplayCreditHours();
     CheckCreditLimits(parsedStudentInformation);

     $(".number").each(function (scheduledCourse) {
         parsedStudentInformation.courses_taken.forEach(function (courseTaken) {
             if ($(".number").eq(scheduledCourse).html() == courseTaken.split("_").join("")) {
                 $(".number").eq(scheduledCourse).parent().remove()
             }
         })
     })

     $("#save").click(function () {
         var studentSchedule = new Array();
         var studentObject = sessionStorage.getItem("studentInformation");
         var studentInfo = JSON.parse(studentObject);

         var semester = new Array();
         var year = new Array();

         $(".yearPlan").each(function () {
             $(this).find("table").each(function (e) {
                 $(this).find(".number").each(function (f) {
                     semester.push('"' + $(this).html() + '"');
                 })
                 year.push("[" + semester + "]");
                 semester = new Array()

             })
             studentSchedule.push(' {"year": [' + year + ']}');
             year = new Array()
         })

         var student =
             '{"student_name": "' + studentInfo.student_name +
             '", "student_email": "' + studentInfo.student_email +
             '", "id_number" : ' + studentInfo.id_number +
             ', "expected_graduation": "' + studentInfo.expected_graduation +
             '", "major": "' + studentInfo.major +
             '", "concentration": "' + studentInfo.concentration +
             '", "courses_taken": ["' + studentInfo.courses_taken.join('", "') +
             '"],  "summer_classes": "' + studentInfo.summer_classes +
             '", "early_graduation": "' + studentInfo.early_graduation +
             '", "honors_college": "' + studentInfo.honors_college +
             '", "min_credits": ' + studentInfo.min_credits +
             ', "max_credits":  ' + studentInfo.max_credits +
             ', "schedule": [' + studentSchedule + "]}";

         $.ajax({
             url: "resources/php/modifyStudent.php",
             data: {
                 student_info: student,
                 student_id: studentInfo.id_number
             },
             success: function (data) {
                 window.alert(data)
             }
         })

         sessionStorage.setItem("studentInformation", student)
     })

     $("#mail").attr("href", "mailto:hello")


     $("#btnExport").click(function (e) {
         fnExcelReport()
     });

     var studentObject = sessionStorage.getItem("studentInformation");
     var studentInfo = JSON.parse(studentObject);
     var minimumCredits = studentInfo.min_credits;
     var maximumCredits = studentInfo.max_credits;
     var studentSchedule = studentInfo.schedule;

     CalculateAndDisplayCreditHours()

     $("#add").click(function () {

         $("#container").toggleClass("blurred");
         $("#addTable").append("<tr id='draggable'><td><input type='text' style='width:50px' class='inputInfo'></td><td><td><input type='text' class='inputInfo'></td><td><td class='credits'><input type='text' style='width:15px' class='inputInfo'></td></tr>");
         $("#draggable").draggable();

     });

     $("#edit").on("keyup", '.inputInfo', function (event) {
         if (event.keyCode === 13) {
             var inputs = $(".inputInfo")
             $("#addTable").find("#draggable").html("<td>" + inputs.eq(0).val() + "</td><td>" + inputs.eq(1).val() + "</td><td class='credits'>" + inputs.eq(2).val() + "</td>");
             $("#container").toggleClass("blurred");
             $("#draggable").draggable();
         }
     });

     $("#delete").droppable({
         drop: function (event, ui) {
             $("#draggable").remove();
             CalculateAndDisplayCreditHours();
             FillHeaderInformation(parsedStudentInformation)
         }
     })

     $(".tab").click(function () {
         window.location.href = "search-page.html";
     });

     $("tbody").on('mousedown', 'tr', function () {
         $(this).attr("id", "draggable");
         $("#draggable").draggable();


     });

     $("tbody").on('click', 'tr', function () {
         $(this).addClass("dragging");
     });


     $("#editIcon").click(function () {
         editIconClickCount++;
         $(this).toggleClass("active");
         var electives = ["PFW", "MATH1", "MATH2", "SYS", "STATS", "CS", "MATH", "GEN"];


         if (editIconClickCount % 2 != 0) {
             $(".yearPlan .credits").each(function () {
                 var $tempVal = $(this).html();
                 $(this).html("<td><input type='text' size = '3' value = '" + $tempVal + "'></td>")
             });

             $(".yearPlan .number").each(function () {
                 if ($(this).html().includes("-") || electives.includes($(this).html())) {
                     var $tempVal = $(this).siblings().eq(0).html();
                     $(this).siblings().eq(0).html("<td> <input type='text' size='40' value='" + $tempVal + "'> </td>")
                 }
             });

             $(".yearPlan").each(function () {
                 $(this).find("table").last().after("<div class = 'tempTable'><h3>Add Summer Semester</h3><div id='addSummerCourse'><p>+</p></div></div>")
             });

         } else {
             $("#container").find("input").each(function () {
                 $(this).parent().parent().html($(this).val());
             })
             CalculateAndDisplayCreditHours();
             CheckCreditLimits(parsedStudentInformation);

             $(".tempTable").remove();
         }
     });

     $("tbody").droppable({

         drop: function (event, ui) {
             var $thisVar = $(this);
             var courseIndex = 0;
             var $allCourses = $(".number")

             parsedCatalogData.forEach(function (course) {
                 if (course.number == $("#draggable").find(".number").html()) {
                     var numberOfPrereqs = 0;
                     var allowCourseHere = null;
                     var plannedCourse = new Array();
                     var courseIndex = $(".yearPlan").find("tbody .number").index($thisVar.find(".number:last"))
                     $(".number").slice(0, courseIndex + 1 - $thisVar.find(".number").length).each(function () {
                         plannedCourse.push($(this).html())
                     });

                     course.prereqs.forEach(function (prereq) {
                         if (splitCoursesTaken.includes(prereq) || plannedCourse.includes(prereq)) {
                             $("#draggable").find("td").removeClass("cautionCourse");
                         } else {
                             allowCourseHere = "ERROR: The Prereqs for this course have not yet been taken. (" + course.prereqs + ")";
                             $("#draggable").find("td").addClass("cautionCourse");
                             alert(allowCourseHere)
                         }
                     })

                 }
             })

             $(this).append("<tr>" + $("#draggable").html() + "</tr>");
             $("#draggable").remove();

             CheckCreditLimits(parsedStudentInformation);
             FillHeaderInformation(parsedStudentInformation)
         }
     })

 });
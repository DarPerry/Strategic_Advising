<!--

Name :  Student_Modifier_JS
Author:  Darius Perry
Created: February 22, 2018
Review :
Description: This class handles javascript side of a student and editing a
             student.

-->



 function MathScienceMajorConcConfirmed() {
     if (GetCheckboxValue($("input[name='major'][value='Mathematical Science']")) == "true" && (GetCheckboxValue($("input[name='conc'][value='Math']")) == "true" || GetCheckboxValue($("input[name='conc'][value='Applied Science']")) == "true")) {
         return true;
     }
 }

 function MathTeachingMajorConcConfirmed() {
     if (GetCheckboxValue($("input[name='major'][value='Mathematics Teaching']")) == "true" && (GetCheckboxValue($("input[name='conc'][value='Middle School']")) == "true" || GetCheckboxValue($("input[name='conc'][value='Secondary School']")) == "true")) {

         return true;
     }
 }

 function SaveStudentInformation(dataToSave, fileName) {
     $.ajax({
         type: "POST",
         url: 'resources/php/modifyStudent.php',
         data: {
             student_info: dataToSave,
             student_id: fileName
         },
         async: false,
         success: function (data) {
             sessionStorage.setItem("studentInformation", dataToSave)
         }
     })
 }

 function GetCheckboxValue(checkbox) {
     if ($(checkbox).is(':checked')) {
         return "true";
     } else {
         return "false";
     }
 }

 function GetStudentEmail() {
     var studentEmail = $("#student-email").val();
     if (studentEmail.substr(-8) != "@bsu.edu") {
         studentEmail += "@bsu.edu"
     }
     return studentEmail;
 }

 function GetCoursesTaken() {
     var UCC_T1FA = ['AHS_100', 'AHS_101', 'DANC_100', 'MUHI_100', 'MUHI_139', 'MUHI_330', 'MUST_100', 'THEA_100'];
     var UCC_T1H = ['ANTH_103', 'ANTH_111', 'CC_101', 'CC_105', 'ENG_206', 'ENG_213', 'ENG_220', 'GEOG_121', 'HIST_201', 'HIST_202', 'JOUR_101', 'PHIL_100', 'RELS_160', 'TCOM_100', 'AR_102', 'AR_201', 'AR_202', 'CH_102', 'CH_201', 'CH_202', 'FR_102', 'FR_201', 'FR_202', 'GER_102', 'GER_201', 'GER_202', 'GRK_102', 'GRK_201', 'GRK_202', 'JAPA_102', 'JAPA_201', 'JAPA_202', 'LAT_102', 'LAT_201', 'LAT_202', 'SP_102', 'SP_201', 'SP_202'];
     var UCC_T1NS = ['ANTH_105', 'ASTR_100', 'ASTR_120', 'BIO_100', 'BIO_111', 'BIO_112', 'CHEM_100', 'CHEM_101', 'CHEM_111', 'GEOG_101', 'GEOL_101', 'HSC_160', 'NREM_101', 'PHYC_100', 'PHYC_110', 'PHYC_120'];
     var UCC_T1SS = ['ANTH_101', 'CJC_101', 'CJC_102', 'COMM_240', 'COMM_290', 'ECON_116', "ECON_201", 'ECON_247', 'GEOG_150', 'ISOM_125', 'PLAN_100', 'POLS_130', 'POLS_293', 'PSYS_100', 'SOC_100', 'SOC_224', 'SOC_242', 'SOC_260'];
     var UCC_T2NNS = ['AHS_200', 'AHS_201', 'ANTH_341', 'ANTH_463', 'ARCH_229', 'ART_290', 'ART_291', 'CAP_200', 'CC_201', 'CC_202', 'CC_205', 'CH_334', 'COMM_322', 'DANC_302', 'EDRD_320', 'EDSE_320', 'ENG_214', 'ENG_215', 'ENG_216', 'ENG_217', 'ENG_402', 'ENG_405', 'ENG_490', 'ENG_491', 'ENG_492', 'ENG_493', 'ENG_494', 'ENG_498', 'FR_334', 'FR_335', 'FR_360', 'GER_361', 'HIST_198', 'HIST_310', 'HIST_370', 'HIST_421', 'HIST_461', 'HIST_467', 'HIST_486', 'JAP_334', 'LA_221', 'LA_270', 'MMP_100', 'MUHI_105', 'MUHI_107', 'MUHI_331', 'MUSE_265', 'PHIL_102', 'PHIL_202', 'PHIL_203', 'PHIL_230', 'PHIL_240', 'PHIL_304', 'RELS_201', 'RELS_206', 'RELS_210', 'RELS_250', 'RELS_280', 'RELS_290', 'SP_335', 'TDPT_280', 'TEDU_102', 'TGRA_184', 'TGRA_286', 'THEA_207', 'THEA_235', 'THEA_317', 'TMFG_105'];
     var UCC_T2NS = ['ANTH_231', 'ANTH_401', 'ANTH_331', 'ASTR_124', 'ASTR_126', 'BIO_102', 'BIO_113', 'BIO_216', 'BIO_220', 'CHEM_112', 'CHEM_200', 'CJC_211', 'CJC_229', 'CJC_332', 'CJC_333', 'CJC_341', 'CJC_350', 'CS_200', 'ECON_202', 'ECON_279', 'ECON_309', 'ECON_310', 'ECON_311', 'ECON_331', 'ECON_348', 'ECON_351', 'EDFO_420', 'EDMU_205', 'EDMU_302', 'EDMU_370', 'EDMU_400', 'EDTE_335', 'FCFC_250', 'GEOG_265', 'GEOG_270', 'GEOL_201', 'GEOL_204', 'GEOL_206', 'HSC_180', 'HSC_261', 'HSC_371', 'NREM_205', 'NREM_211', 'NREM_221', 'PHYC_151', 'PLAN_220', 'POLS_432', 'POLS_433', 'PSYS_324', 'PSYS_325', 'PSYS_424', 'SOC_235', 'SOC_328', 'SOC_333', 'SOC_380', 'SOC_421', 'SOC_425', 'SOCW_325', 'TCMP_400', 'TDPT_406', 'WGS_210', 'WGS_220']

     var courses_taken = new Array();
     var tr_count = $('.row');
     var summer_classes_bool;
     var honors_college_bool;
     var early_graduation_bool;
     var course = "";

     tr_count.each(function () {
         course = $(this).find("#cname").text().trim() + "_" + $(this).find("#cnum").text().trim();
         if (course == "MATH_161" || course == "MATH_165") {
             course = "MATH1";
         } else if (course == "MATH_162" || course == "MATH_166") {
             course = "MATH2"
         } else if (course == "MATH_215" || course == "CS_124") {
             course = "SYS"
         } else if (course.substr(0, 3) == "PFW") {
             course = "PFW"
         } else if (course == "MATH_221" || course == "ECON_221") {
             course = "STATS"
         } else if (course == "HONR_296" || course == "HONR_297" || course == "HONR_298") {
             course = "HONR-NS"
         } else if (UCC_T1FA.includes(course)) {
             courses_taken.push('"' + "UCC-T1FA" + '"')
         } else if (UCC_T1H.includes(course)) {
             courses_taken.push('"' + "UCC-T1H" + '"')
         } else if (UCC_T1NS.includes(course)) {
             courses_taken.push('"' + "UCC-T1NS" + '"')
         } else if (UCC_T1SS.includes(course)) {
             courses_taken.push('"' + "UCC-T1SS" + '"')
         } else if (UCC_T2NNS.includes(course)) {
             courses_taken.push('"' + "UCC-T2NNS" + '"')
         } else if (UCC_T2NS.includes(course)) {
             courses_taken.push('"' + "UCC-T2NS" + '"')
         }
         courses_taken.push('"' + course + '"');

     });

     courses_taken.shift();
     courses_taken.sort();

     return courses_taken
 }

 function GoToPage(pageAddress) {
     window.location.href = pageAddress;
 }

 function DeleteTakenCourse() {
     $(".row").each(function () {
         if ($("#course-name").val().toUpperCase() + " " + $("#course-number").val() == $(this).find("#cname").html() + " " + $(this).find("#cnum").html()) {
             this.remove();
         }
     });
 }

 function AddTakenCourse() {
     if ($("#course-name").val() != '' && $("#course-number").val() != '') {
         $('.row').last().after("<tr class='row'><td id='cname'>" + $("#course-name").val().toUpperCase() + "</td><td id='cnum'>" + $("#course-number").val() + "</td><td id ='ctitle'>N/A</td></tr>");
     }
     $.ajax({
         url: "resources/data/course-catalog.cca",
         success: function (data) {
             var parsedData = JSON.parse(data);
             parsedData.forEach(function (courseInCatalog) {
                 if ($("#course-name").last().val().toUpperCase() + $("#course-number").val() == courseInCatalog.number) {
                     $(".row").last().find("#ctitle").html(courseInCatalog.name)
                 }
             })
         }
     });

 }

 function SetStudentData() {
     var rawData = "";
     $.ajax({
         url: "resources/data/students/" + sessionStorage.getItem("newStudentId") + ".sa",
         success: function (data) {
             rawData = data;
             sessionStorage.setItem("studentInformation", rawData);
         },
         async: false
     });
 }

 function PopulatePageInformation() {
     if (sessionStorage.getItem("newStudentMode") == 'false') {
         var sessionStudentInformation = sessionStorage.getItem("studentInformation");
         var studentObject = JSON.parse(sessionStudentInformation);
         $("#student-name").val(studentObject.student_name);
         $("#student-email").val(studentObject.student_email);
         $("#id-number").val(studentObject.id_number);
         $("#expected-graduation").val(studentObject.expected_graduation);

         $("input[name='major'][value='" + studentObject.major + "']").prop('checked', true);
         if (studentObject.concentration !== "undefined") {
             $("input[name='conc'][value='" + studentObject.concentration + "']").prop('checked', true);
         }

         if (studentObject.summer_classes == "true") {
             $("#summer-classes").prop('checked', true);
         }
         if (studentObject.early_graduation == "true") {
             $("#early-graduation").prop('checked', true);
         }
         if (studentObject.honors_college == "true") {
             $("#honors-student").prop('checked', true);
         }

         $("#min-credits").val(studentObject.min_credits);
         $("#max-credits").val(studentObject.max_credits);

         studentObject.courses_taken.forEach(function (course) {
             try {
                 var splitCourseInfo = course.split("_");
                 var courseInfoRow = "<tr class='row'><td id='cname'>" + splitCourseInfo[0].toUpperCase().trim() + "</td><td id='cnum'>" + splitCourseInfo[1].toUpperCase().trim() + "</td'><td class='ctitle'></td></tr>";
                 $('.row').last().after(courseInfoRow);
             } catch (e) {
                 console.log(e)
             }

         });
     } else if (sessionStorage.getItem("newStudentMode") == 'true') {
         $("#id-number").val(sessionStorage.getItem("newStudentId"))
     } else {
         $("#id-number").val(null)
     }

     $.ajax({
         url: "resources/data/course-catalog.cca",
         success: function (data) {
             var catalogData = JSON.parse(data)
             $(".row").each(function (a) {
                 catalogData.forEach(function (x) {
                     if ($(".row").eq(a).text() == x.number) {
                         $(".row").eq(a).find(".ctitle").html(x.name)
                     } else if ($(".number").eq(a).html() == "CS") {
                         $(".number").eq(a).parent().find(".ctitle").html("Computer Science Elective")
                     } else if ($(".number").eq(a).html() == "GEN") {
                         $(".number").eq(a).parent().find(".ctitle").html("General Elective")
                     }
                 })

             })
         },
     });
 }

 function GetStudentSchedule() {
     if (sessionStorage.getItem("newStudentMode") == "false") {

         var studentObject = sessionStorage.getItem("studentInformation");
         var studentInfo = JSON.parse(studentObject);
         var studentSchedule = new Array();
         var courses_taken = new Array();
         var semester = new Array();
         var year = new Array();


         studentInfo.schedule.forEach(function (thisSemester) {
             thisSemester.year.forEach(function (a) {
                 a.forEach(function (course) {
                     semester.push('"' + course + '"')
                 })
                 year.push("[" + semester + "]");
                 semester = new Array();
             })
             studentSchedule.push(' {"year": [' + year + ']}');
             year = new Array()
         })
     } else if (sessionStorage.getItem("newStudentMode") == "true" || sessionStorage.getItem("newStudentMode") == "off") {
         studentSchedule = "";
     }

     return studentSchedule;
 }

 function GetStudentInformation() {

     var student =
         '{"student_name": "' + $("#student-name").val() +
         '", "student_email": "' + GetStudentEmail() +
         '", "id_number" : "' + $("#id-number").val() +
         '", "expected_graduation": "' + $("#expected-graduation").val() +
         '", "major": "' + $(".major:checked").val() +
         '", "concentration": "' + $(".concentration:checked").val() +
         '", "courses_taken": [' + GetCoursesTaken() +
         '],  "summer_classes": "' + GetCheckboxValue($('#summer-classes')) +
         '", "early_graduation": "' + GetCheckboxValue($('#early-graduation')) +
         '", "honors_college": "' + GetCheckboxValue($('#honors-student')) +
         '", "min_credits": ' + $("#min-credits").val() +
         ', "max_credits":  ' + $('#max-credits').val() +
         ', "schedule": [' + GetStudentSchedule() + ']  }';

     return student
 }

 function HasMajorWithNoConc() {

     if (GetCheckboxValue($("input[name='major'][value='Actuarial Mathematics']")) == "true" || GetCheckboxValue($("input[name='major'][value='Mathematical Science']")) == "true" || GetCheckboxValue($("input[name='major'][value='Computer Science']")) == "true") {
         return true;
     }
 }


 $(document).ready(function () {
     $(".major").change(function () {
         $(".concentration").prop('checked', false)
     });

     document.getElementById("form").reset();
     PopulatePageInformation();

     $("#submit-button").click(function () {
         if ($("#id-number").val() != '') {
             SaveStudentInformation(GetStudentInformation(), $("#id-number").val())
             window.alert("Your new information has been saved.");

         } else {
             window.alert("ERROR: Student must have and ID number to be saved.");
         }

         return false;


     });

     $("#generateButton").click(function () {
         if ($("#id-number").val().length == 9) {
             if (MathScienceMajorConcConfirmed() || MathTeachingMajorConcConfirmed() || HasMajorWithNoConc()) {
                 SaveStudentInformation(GetStudentInformation(), $("#id-number").val());
                 GoToPage("output.html");
             } else {
                 alert("Please select a concentration for student's major")
             }
         } else {
             window.alert("ERROR: Please enter a valid ID number. \n(9 Digits long)");
         }
         return false
     })

     $("#add-button").click(function () {
         if ($("#id-number").val() != '') {

             AddTakenCourse()
             SaveStudentInformation(GetStudentInformation(), $("#id-number").val());
         } else {
             window.alert("ERROR: Student must have and ID number to be saved.");
         }
         return false;
     });

     $("#delete-button").click(function () {
         if ($("#id-number").val() != '') {

             DeleteTakenCourse();
             SaveStudentInformation(GetStudentInformation(), $("#id-number").val());
             return false;
         } else {
             window.alert("ERROR: Student must have and ID number to be saved.");
         }
     });

     $("#search").click(function () {
         SaveStudentInformation(GetStudentInformation(), $("#id-number").val())
         GoToPage("search-page.html")
     });

 });
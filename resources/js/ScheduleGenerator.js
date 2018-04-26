/* Author: Ashlyn King
Created: 04/19/2018
Review: Darius Perry, 04/22/2018
Description: This class prioritizes courses based on prerequisites
 */

var courses = [];


//add courses to course dictionary, intializing with prerequisites and priority of 0
function initalizeCourses(){
    $.get({
        url: 'resources/php/readCourseCatalog.php',
        dataType: '.cca',
        success: function (data) {
            for(var i in data){
                courses.add(new Course(i[0], i[4], i[2], 0));
            }
        }
    })
}

//iterate through courses and assign proper priority
function prioritize(){
    var highestPriority = 0;
    for(var course in courses){
        if(course.getPrereqs().length == 0){
            ;
        } else {
            for(var pre in  course.getPrereqs()){
                if(course.getPrereqs()[pre] > highestPriority){
                    highestPriority = course.getPrereqs()[pre] + 1;
                }
            }
        }
    }
}

function orderCourses(){
    var highestPriority = 0;
    var schedule = []
    while(schedule.length != courses.length){
        for(var course in courses){
            if(course.getPriority() == highestPriority){
                schedule.add(course);
                courses.remove(course);
            }
        }
        highestPriority ++;
    }
}

function createSchedule(){
/* while credits < max
   --> add courses to schedule
 */
}


function Course(courseName, preReqs, creditHours, priority){
    this.preReqs = preReqs;
    this.priority = priority;
    this.courseName = courseName;
    this.creditHours = creditHours;
}

Course.prototype.getPrereqs = function(){
    return this.preReqs;
};

Course.prototype.getPriority = function(){
    return this.priority;
};

Course.prototype.setPriority = function(p) {
    return this.priority = p;
};
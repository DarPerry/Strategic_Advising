/* Author: Ashlyn King
Created: 04/19/2018
Review: Darius Perry, 04/22/2018
Description: This class prioritizes courses based on prerequisites
 */

var courses = [];


//add courses to course dictionary, intializing priority with 0
function initalizeCourses(){
    $.ajax({
        type: "GET",
        url: 'resources/php/readCourseCatalog.php',
        data: {
        //add data here
        },
        async: false,
        success: function (data) {
            //on success
        }
    })
}

//iterate through courses and assign proper priority

function Course(){
    this.preReqs = [];
    this.priority = 0;
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
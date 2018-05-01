// Enter "npm test" into the terminal to run tests.

const fs = require('fs');
const assert = require('assert');
const studentID = 987654321;
const studentJSON = JSON.parse(fs.readFileSync('./resources/data/students/' + studentID + '.sa', 'utf-8'));
const scheduleString = JSON.stringify(studentJSON['schedule']);
const removedCourse = "CS120";
const addedCourse = "CS333";

describe('ModifySchedule', function() {
    describe('NewSchedule', function() {
        it('should not contain removed course.', function() {
            assert.equal(scheduleString.search(removedCourse), -1);
        });
        it('should contain added course.', function() {
            assert.notEqual(scheduleString.search(addedCourse), -1);
        });
    });
});
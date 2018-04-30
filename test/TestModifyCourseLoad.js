// Enter "npm test" into the terminal to run tests.

const fs = require('fs');
const assert = require('assert');
const studentID = 789789789;
const studentJSON = JSON.parse(fs.readFileSync('./resources/data/students/' + studentID + '.sa', 'utf-8'));
const minCourseLoad = 9;
const maxCourseLoad = 12;

describe('ModifyCourseLoad', function() {
    describe('NewCourseLoad', function() {
        it('should match the changed minimum', function() {
            assert.equal(studentJSON["min_credits"], minCourseLoad);
        });
        it('should match the changed maximum', function() {
            assert.equal(studentJSON["max_credits"], maxCourseLoad);
        });
    });
});

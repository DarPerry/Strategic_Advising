// Enter "npm test" into the terminal to run tests.

const fs = require('fs');
const assert = require('assert');
const studentName = 'John Smith';
const studentEmail = 'jsmith@bsu.edu';
const studentID = 999999999;
const studentGraduation = 'May 2018';
const studentMajor = 'Computer Science';
const summerOption = 'false';
const earlyGraduation = 'false';
const honorsStatus = 'false';
const minCreditLoad = 12;
const maxCreditLoad = 15;
var studentJSON = JSON.parse(fs.readFileSync('./resources/data/students/' + studentID + '.sa', 'utf-8'));

describe('AddNewStudent', function() {
    describe('NewStudentFile', function() {
        it('should store student name.', function() {
            assert.deepEqual(studentJSON['student_name'], studentName);
        });
        it('should store student email.', function() {
            assert.deepEqual(studentJSON['student_email'], studentEmail);
        });
        it('should store student ID.', function() {
            assert.deepEqual(studentJSON['id_number'], studentID);
        });
        it('should store expected graduation.', function() {
            assert.deepEqual(studentJSON['expected_graduation'], studentGraduation);
        });
        it('should store student major.', function() {
            assert.deepEqual(studentJSON['major'], studentMajor);
        });
        it('should store Summer option.', function() {
            assert.deepEqual(studentJSON['summer_classes'], summerOption);
        });
        it('should store early graduation status.', function() {
            assert.deepEqual(studentJSON['early_graduation'], earlyGraduation);
        });
        it('should store student honors status.', function() {
            assert.deepEqual(studentJSON['honors_college'], honorsStatus);
        });
        it('should store min credit load.', function() {
            assert.deepEqual(studentJSON['min_credits'], minCreditLoad);
        });
        it('should store max credit load.', function() {
            assert.deepEqual(studentJSON['max_credits'], maxCreditLoad);
        });
    });
});

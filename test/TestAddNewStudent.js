// Enter "npm test" into the terminal to run tests.

const fs = require('fs');
const assert = require('assert');
const studentName = 'John Smith';
const studentEmail = 'jsmith@bsu.edu';
const studentID = 123456789;
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
        it('should contain student name.', function() {
            assert.deepEqual(studentJSON['student_name'], studentName);
        });
        it('should contain student email.', function() {
            assert.deepEqual(studentJSON['student_email'], studentEmail);
        });
        it('should contain student ID.', function() {
            assert.deepEqual(studentJSON['id_number'], studentID);
        });
        it('should contain expected graduation.', function() {
            assert.deepEqual(studentJSON['expected_graduation'], studentGraduation);
        });
        it('should contain student major.', function() {
            assert.deepEqual(studentJSON['major'], studentMajor);
        });
        it('should contain Summer option.', function() {
            assert.deepEqual(studentJSON['summer_classes'], summerOption);
        });
        it('should contain early graduation status.', function() {
            assert.deepEqual(studentJSON['early_graduation'], earlyGraduation);
        });
        it('should contain student honors status.', function() {
            assert.deepEqual(studentJSON['honors_college'], honorsStatus);
        });
        it('should contain min credit load.', function() {
            assert.deepEqual(studentJSON['min_credits'], minCreditLoad);
        });
        it('should contain max credit load.', function() {
            assert.deepEqual(studentJSON['max_credits'], maxCreditLoad);
        });
    });
});

// Enter "npm test" into the terminal to run tests.

const fs = require('fs');
const assert = require('assert');
const CSStudentID = 123123123;
const AMStudentID = 321321321;
var CSStudentJSON = JSON.parse(fs.readFileSync('./resources/data/students/' + CSStudentID + '.sa', 'utf-8'));
var AMStudentJSON = JSON.parse(fs.readFileSync('./resources/data/students/' + AMStudentID + '.sa', 'utf-8'));
var CSCatalog = FileReader.readAsText('./resources/data/templates/ComputerScience.tmp', 'utf-8');
var AMCatalog = FileReader.readAsText('./resources/data/templates/ActuarialMathematics.tmp', 'utf-8');


describe('GenerateSchedule', function() {
    describe('StudentFile', function() {
        it('should contain generated schedule.', function() {
            assert.ok(CSStudentJSON['schedule'].length > 0);
            assert.ok(AMStudentJSON['schedule'].length > 0);
        });
    // });
    // describe('GeneratedSchedule', function() {
    //     it('should contain CS schedule for CS majors.', function() {

    //     });
    //     it('should contain AM schedule for AM majors.', function() {

    //     });
    });
});

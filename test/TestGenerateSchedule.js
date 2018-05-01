// Enter "npm test" into the terminal to run tests.

const fs = require('fs');
const assert = require('assert');
const cheerio = require('cheerio');
const CSStudentID = 123123123;
const AMStudentID = 321321321;
const CSStudentJSON = JSON.parse(fs.readFileSync('./resources/data/students/' + CSStudentID + '.sa', 'utf-8'));
const AMStudentJSON = JSON.parse(fs.readFileSync('./resources/data/students/' + AMStudentID + '.sa', 'utf-8'));
const CSScheduleString = JSON.stringify(CSStudentJSON["schedule"]);
const AMScheduleString = JSON.stringify(AMStudentJSON["schedule"]);
const CSCatalog = fs.readFileSync('./resources/data/templates/ComputerScience.tmp', 'utf-8');
const AMCatalog = fs.readFileSync('./resources/data/templates/ActuarialMath.tmp', 'utf-8');
var CSCourses = [];
var AMCourses = [];

var $ = cheerio.load(CSCatalog.toString(), {normalizeWhitespace: true, xmlMode: true});
$('td[class=number]').each(function(i, elem) {
    CSCourses[i] = $(this).text();
});
var $ = cheerio.load(AMCatalog.toString(), {normalizeWhitespace: true, xmlMode: true});
$('td[class=number]').each(function(i, elem) {
    AMCourses[i] = $(this).text();
});

describe('GenerateSchedule', function() {
    describe('StudentFile', function() {
        it('should contain generated schedule.', function() {
            assert.ok(CSStudentJSON['schedule'].length > 0);
            assert.ok(AMStudentJSON['schedule'].length > 0);
        });
    });
    describe.skip('GeneratedSchedule', function() {
        it('should contain CS schedule for CS majors.', function() {

        });
        it('should contain AM schedule for AM majors.', function() {

        });
    });
});

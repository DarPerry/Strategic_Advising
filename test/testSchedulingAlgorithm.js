// Enter "npm test" into the terminal to run tests.

var assert = require('assert');

describe('SchedulingAlgorithm', function() {

    describe('TopologicalSort', function() {
        sortedCourses = topSort(['CS121', 'MATH162', 'CS124', 'CS222', 'MATH161', 'ENG103']);
        it('should take an array of course codes and then sort them.', function() {
            assert.deepEqual(sortedCourses, ['ENG103', 'CS121', 'CS124', 'MATH161', 'MATH162', 'CS222']);
        });
        it('It should return the sorted course codes as an array.', function() {
            assert(Array.isArray(sortedCourses));
        });
    });

    describe('Backflow', function() {
        it('should take an array of {course: placeholder} pairs, then replace placeholders with calculated priorities.', function() {
            prioritizedCourses = backflow([{'CS121': 999}, {'CS124': 999}, {'MATH161': 999}, {'CS222': 999}, {'MATH162': 999}]);
            assert.deepEqual(prioritizedCourses, [{'CS121': 1}, {'CS124': 1}, {'MATH161': 1}, {'CS222': 0}, {'MATH162': 0}]);
        });
    });

    describe('CriticalPath', function() {
        it('should take an array of prioritized courses and then use it to create an optimized schedule.', function() {
            optimizedSchedule = critPath([{'CS121': 1}, {'CS124': 1}, {'MATH161': 1}, {'CS222': 0}, {'MATH162': 0}]);
            assert.deepEqual(optimizedSchedule, [['CS121', 'CS124', 'MATH161'], ['CS222', 'MATH162']]);
        });
    });
});

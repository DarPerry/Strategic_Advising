// Enter "npm test" into the terminal to run tests.

var assert = require('assert');

describe('SchedulingAlgorithm', function() {

    describe('TopologicalSort', function() {
        it('should take an array of course numbers and sort them.', function() {
            sortedCourses = topSort(['CS121', 'MATH162', 'CS124', 'CS222', 'MATH161', 'ENG103']);
            assert.deepEqual(sortedCourses, ['ENG103', 'CS121', 'CS124', 'MATH161', 'MATH162', 'CS222']);
        });
        // it('should do something else', function() {
        //     assert.equal(2, 2);
        // });
    });

    describe('Backflow', function() {
        it('should take a dictionary of sorted course numbers, each paired with a placeholder priority, and then figure ' +
            'the actual priority for each course.', function() {
            prioritizedCourses = backflow([{'CS121': 999}, {'CS124': 999}, {'MATH161': 999}, {'CS222': 999}, {'MATH162': 999}]);
            assert.deepEqual(prioritizedCourses, [{'CS121': 1}, {'CS124': 1}, {'MATH161': 1}, {'CS222': 0}, {'MATH162': 0}]);
        });
        // it('should do something else', function() {
        //     assert.equal(2, 2);
        // });
    });

    describe('CriticalPath', function() {
        it('should take a dictionary of sorted course numbers, each paired with their figured priorities, and then find ' +
            'the courses that should be taken each semester for the optimal schedule.', function() {
            optimizedSchedule = critPath([{'CS121': 1}, {'CS124': 1}, {'MATH161': 1}, {'CS222': 0}, {'MATH162': 0}]);
            assert.deepEqual(optimizedSchedule, [['CS121', 'CS124', 'MATH161'], ['CS222', 'MATH162']]);
        });
        // it('should do something else', function() {
        //     assert.equal(2, 2);
        // });
    });
});

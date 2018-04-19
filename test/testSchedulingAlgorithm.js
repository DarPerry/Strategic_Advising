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
        it('should take a dictionary of sorted classes', function() {
            assert.equal(1, 1);
        });
        // it('should do something else', function() {
        //     assert.equal(2, 2);
        // });
    });

    describe('CriticalPath', function() {
        it('should do something', function() {
            assert.equal(1, 1);
        });
        // it('should do something else', function() {
        //     assert.equal(2, 2);
        // });
    });
});

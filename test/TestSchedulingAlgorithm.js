// Enter "npm test" into the terminal to run tests.
// These tests are being skipped until the algorithm is working.

var assert = require('assert');

describe.skip('SchedulingAlgorithm', function() {
    describe('TopologicalSort', function() {
        sample1 = ['CS121', 'MATH162', 'CS124', 'CS222', 'MATH161'];
        expected1 = ['CS121', 'CS124', 'MATH161', 'MATH162', 'CS222'];
        sample2 = ['CS121', 'MATH162', 'CS124', 'CS222', 'MATH161', 'CS239', 'CS224', 'CS230'];
        expected2 = ['CS121', 'CS124', 'MATH161', 'MATH162', 'CS222', 'CS224', 'CS230', 'CS239'];
        it('should take a list of courses and sort them', function() {
            assert.deepEqual(topSort(sample1), expected1);
            assert.deepEqual(topSort(sample2), expected2);
        });
    });
    describe('Backflow', function() {
        sample3 = [{'CS121': 999}, {'CS124': 999}, {'MATH161': 999}, {'MATH162': 999}, {'CS222': 999}];
        expected3 = [{'CS121': 1}, {'CS124': 1}, {'MATH161': 1}, {'MATH162': 0}, {'CS222': 0}];
        sample4 = [{'CS121': 999}, {'CS124': 999}, {'MATH161': 999}, {'MATH162': 999}, {'CS222': 999}, {'CS224': 999}, {'CS230': 999}, {'CS239': 999}];
        expected4 = [{'CS121': 2}, {'CS124': 2}, {'MATH161': 2}, {'CS222': 1}, {'MATH162': 1}, {'CS239': 0}, {'CS224': 1}, {'CS230': 1}];
        it('should take sorted courses and assign priorities', function() {
            assert.deepEqual(backflow(sample3), expected3);
            assert.deepEqual(backflow(sample4), expected4);
        });
    });
    describe('CriticalPath', function() {
        sample5 = [{'CS121': 1}, {'CS124': 1}, {'MATH161': 1}, {'CS222': 0}, {'MATH162': 0}];
        expected5 = [['CS121', 'CS124', 'MATH161'], ['MATH162', 'CS222']];
        sample6 = [{'CS121': 2}, {'CS124': 2}, {'MATH161': 2}, {'CS222': 1}, {'MATH162': 1}, {'CS239': 0}, {'CS224': 1}, {'CS230': 1}];
        expected6 = [['CS121', 'CS124', 'MATH161'], ['MATH162', 'CS222', 'CS224', 'CS230'], ['CS239']];
        it('should take prioritized courses and create optimal schedule', function() {
            assert.deepEqual(critPath(sample5), expected5);
            assert.deepEqual(critPath(sample6), expected6);
        });
    });
});

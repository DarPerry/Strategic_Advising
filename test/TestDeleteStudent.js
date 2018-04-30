// Enter "npm test" into the terminal to run tests.

const fs = require('fs');
const assert = require('assert');
const studentID = 987987987;

describe('DeleteStudent', function() {
    describe('DeletedStudent', function() {
        it('should not be found in the data folder.', function() {
            assert.equal(fs.existsSync('./resources/data/students/' + studentID + '.sa'), false);
        });
    });
});

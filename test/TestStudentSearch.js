/*
Author: Ashlyn King
Created: 04/26/2018
 */

chai.should();

describe('TestStudentAdd', function(){
    beforeEach(function(){
        this.xhr = sinon.useFakeXMLHttpRequest();

        this.requests = [];
        this.xhr.onCreate = function(xhr) {
            this.requests.push(xhr);
        }.bind(this);
    });
    afterEach(function(){
        this.xhr.restore();
    });

    //tests go here
    it('should return file 900935524.sa', function(done){
        var data = {"student_name": "Darius Jordan Perry", "student_email": "djperry2@bsu.edu", "id_number" : "900935524", "expected_graduation": "May 2018", "major": "Computer Science", "concentration": "undefined", "courses_taken": [],  "summer_classes": "false", "early_graduation": "false", "honors_college": "false", "min_credits": 12, "max_credits":  18, "schedule": []  };
        var dataJSON = JSON.stringify(data);

        testFetch.get(function(err, result){
            result.should.deep.equal(data);
            done();
        });
        this.requests[0].respond(200, {'Content-Type': 'test/json', dataJSON});
    });
});
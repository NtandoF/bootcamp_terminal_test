let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('countRegNumber', function(){
    it('should return the number of regNum in the string', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    it('should return the number of regNum in the string' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328,CL 5251545'), 4);
});
});

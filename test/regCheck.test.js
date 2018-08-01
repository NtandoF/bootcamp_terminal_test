let assert = require("assert");
let regCheck = require("../regCheck");


describe('regCheck' , function(){
    it('check if regNum is from a province' , function(){
        assert.equal(regCheck('DV 245 lP GP', 'GP'), true);
    });

    it('check if regNum is from a province' , function(){
        assert.equal(regCheck('DV 23 LP MP', 'GP'), false);
});
});

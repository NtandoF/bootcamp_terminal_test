let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('fromWhere' , function(){
    it('if the regNum starts with CY should return Bellville' , function(){
  assert.equal(fromWhere('CY') , 'Bellville');
});

 it('if the regNum starts with CJ should return Paarl' , function(){
assert.equal(fromWhere('CJ'), 'Paarl');
});
it('if the regNum starts with CA should return Cape Town' , function(){
assert.equal(fromWhere('CA'), 'Cape Town');
});
});

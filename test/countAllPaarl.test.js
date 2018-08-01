let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('countAllPaarl function' , function(){
    it('should only return regNum that start with CJ' , function(){
  assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CJ 123'), 3);
});

  it('should only return regNum that start with CJ' , function(){
assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CJ 123, CJ 5432'), 4);
});
});

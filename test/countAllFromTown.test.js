let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('countAllFromTown' , function(){
    it('should only return regNum that from one Town' , function(){
  assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3);
});

 it('should only return regNum that from one Town' , function(){
assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341,CL 876, CL 098'), 0);
});
});

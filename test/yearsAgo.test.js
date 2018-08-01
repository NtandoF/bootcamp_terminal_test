let assert = require("assert");
let yearsAgo = require("../yearsAgo");


describe('yearsAgo' , function(){
    it('should return how many years ago it was' , function(){
  assert.equal(yearsAgo('2001'), 17);
});

  it('should return how many years ago it was' , function(){
assert.equal(yearsAgo('1999'), 19);
});
});

let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('isWeekday' , function(){
    it('should return false if weekday starts with S' , function(){
  assert.equal(isWeekday('Saturday'), false);
});

  it('should return true if weekday does not start with S' , function(){
assert.equal(isWeekday('Monday'), true);
});
});

let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('findItemsOver20' , function(){
    it('Return only the amount of object over 20' , function(){
      assert.equal(findItemsOver20([
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ]), 2);
});
it('Return only the amount of object over 20' , function(){
  assert.equal(findItemsOver20([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
    {name : 'peach', qty : 29}
]), 3);
});
});

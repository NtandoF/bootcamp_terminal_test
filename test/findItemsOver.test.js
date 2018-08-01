let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('findItemsOver function', function(){
    it('should return the all the items over', function(){
        assert.deepEqual(findItemsOver(
  [{name : 'bananas', qty : 19},
  {name : 'pears', qty : 37},
  ], 20), [{'name' : 'pears', 'qty' : 37}]);
    });
          it('should return the all the items over', function(){
              assert.deepEqual(findItemsOver(
        [{name : 'bananas', qty : 19},
        {name : 'pears', qty : 37},
      ], 20), [{'name' : 'pears', 'qty' : 37}]);
          });
            });

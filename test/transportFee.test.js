let assert = require("assert");
let transportFee = require("../transportFee");


describe('transportFee' , function(){
    it('returns the right price based on the shift you are working' , function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it('returns the right price based on the shift you are working' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
});
});

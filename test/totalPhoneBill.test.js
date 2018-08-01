let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe('totalPhoneBill' , function(){
    it('the total bill for the calls and sms made.' , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    });
    it('the total bill for the calls and sms made.' , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms, call'), 'R10.20');
});
});

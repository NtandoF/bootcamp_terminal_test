module.exports = function(regNum){
//  console.log (regNum);
  var regsplit = regNum.split(',')
  console.log (regsplit);
  var regNums = regsplit.length;
  return regNums;
}

module.exports = function(regNum, loc){
  console.log(regNum);
  var number =regNum.split(',');
   var Town=[];
  for (var i=0;i<number.length;i++){
    if (number[i].startsWith(loc)){
    Town.push(number);

    }
  }
  return Town.length;

}

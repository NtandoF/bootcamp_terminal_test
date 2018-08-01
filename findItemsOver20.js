module.exports = function(itemsList){
  var List = [];
  for (var i=0; i<itemsList.length; i++){
    var view = itemsList[i].qty;
   if (view>20){
     List.push(itemsList[i]);
   }
  }
  return List.length;
}

module.exports = function(itemsList, threshold){
//console.log (itemsList);
  var Over= [];
   for (var i=0; i<itemsList.length; i++){
   var see= itemsList[i];
     if (see.qty>threshold){
       Over.push(see);
       console.log (Over);
     }
   }
  return Over;
}

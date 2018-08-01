module.exports = function(registrationNumber){
if (registrationNumber.startsWith ('CY')){
    return 'Bellville'
    }
if (registrationNumber.startsWith ('CJ')){
    return 'Paarl'
}
  if (registrationNumber.startsWith ('CA')){
      return 'Cape Town'
      }
      if (registrationNumber.startsWith ('')){
    return 'Some other place!'
  }
}

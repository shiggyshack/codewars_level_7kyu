//Write a function, when given a string as a parameter, will only return the digits that were contained in the string and write them as one number.

var filterString = function(value) {
  //Use the .replace method to search for an non-digit in the value string and replace it with nothing, then cast that to a number using (+).
  return +value.replace(/\D/g, '');
}

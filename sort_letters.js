//Create a function, one string of unique characters, that will return a new string where the characters have been placed in alphabetical order.
function sortGiftCode(code){
  //Update the string to be an array of the individual characters
  code = code.split('');
  //Use .sort() to place the characters in alphabetical order in the array
  code.sort();
  //Join each element in the array with '' and return it as a string
  return code.join('');
}

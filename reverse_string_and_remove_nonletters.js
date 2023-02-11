//Create a function that takes in a string, reverses it, and removes all of the non-alphabetical characters
function reverseLetter(str) {
  //Using a regular expression, replace all non-alphabetical characters '^' and replace with ''
  //Split the string into individual elements in an array, so you can reverse it, and the join all the elements back in place once they were reversed
  return str.replace(/[^A-Za-z]/g, "").split('').reverse().join('');
}

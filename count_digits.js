//Provided an integer number, n, determine how many digits are in the number.
function digits(n) {
  //Reassign n to be an array of digits as characters
  n = String(n).split('');
  //Return the length of the array
  return n.length; 
}

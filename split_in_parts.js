//Create a function, accepting two parameters, that will take a string and split it into parts of length partLength.
var splitInParts = function(s, partLength) {
  //Instantiate a new array to hold the parts as elements, and a counter for the while loop.
  let newString = [];
  let count = 0;
  //As long as the count variable is within the length of the s variable.
  while (count < s.length) {
    //Push a section of the string to the new array newString
    newString.push(s.slice(count, count + partLength));
    //Increment the count variable by partLength
    count += partLength;
  }
  //Join the elements in the newString array using a space
  return newString.join(' ');
}

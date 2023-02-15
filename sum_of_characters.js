//Take a word that is written using lowercase letters and return an integer which represents the sum of each individual character after it is assigned a corresponding integer, a=1, b=2, c=3, etc.
function wordsToMarks(string){
  //Turns the string into an array of characters
  let stringArray = string.split('');
  //Sum will hold the running total as we work through the array
  let sum = 0;
  for(let i = 0; i < stringArray.length; i++){
    //.charCodeAt returns an ASCII value that is then adjust by subtracting 96
    sum += stringArray[i].charCodeAt(0)-96
  }
  //Running total from the for loop is returned
  return sum;
}

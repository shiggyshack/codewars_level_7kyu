//Accepting a number, create a function that returns the number "exploded" as a string of digits. The digit present in the original parameter will determine how many times that number is to be repeated in the returned string. For example, 231 will return "223331".
function explode(s) {
  //Cast the parameter s to a String and split it into an array of individual strings.
  s = s.toString().split('');
  //Create a new array to hold the return values
  let nS = [];
  //Iterate, using a for loop, through each element in the parameter.
  for(let i = 0; i < s.length; i++){
    //This variable will hold the number of times the digit is to be repeated in the while loop
    let count = Number(s[i])
    while(count > 0){
      //This will continue to push that number to the return array (String) and count-- will adjust the number of times it needs to still be added.
      nS.push(s[i]);
      count--;
    }
  }
  //Exiting the for and while loops, join your array elements together to return one string.
  return nS.join('');
}

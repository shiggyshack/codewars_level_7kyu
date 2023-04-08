//Create a function, accepting a number as a parameter, and return the binary represenation of the base 10 number if it was even, and the hexadecimal representation fo the base 10 number if it was odd.
function evensAndOdds(num){
  //This conditional logic checks to see if the number is even.	
  if(num%2 === 0){
    //.toString(2) will convert the number to base 2.
    return num.toString(2);
  }
  //Otherwise, it was odd
  else{
    //.toString(16) will convert the number to base 16.
    return num.toString(16);
  }
}

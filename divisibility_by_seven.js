//Create a function that will reduce a number down to a two-digit number to determine if it is divisible by 7 or not and return how many times it took to reduce it down to a two-digit number
function seven(m) {
  //Create a step counter to determine how many times the while loops needs to run
  let steps = 0;
    //Continue the loop as long as your number has more than two-digits
    while(m>99){
      //Store the ones digit
      let n = m%10;
      //Chop off the ones digit and use parseInt to get rid of the decimal value
      let k = parseInt(m/10);
      //Update the value of m and the step variable
      m = k-2*n;
      steps++;
    }
  //Return both variables in an array
  return [m, steps];
}

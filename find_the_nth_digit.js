//Create a function that will return a specific digit provided a number
var findDigit = function(num, nth){
  //Checks that the place you are looking for is a positive number; otherwise, return -1
  if(nth < 1){
      return -1;
  }
  //Checks to see if the number is a negative number, if it is we change it to a positive number
  if(num < 0){
    num = -1*num
  }
  //Cast the number to a string so we can pull a specific "digit" or character
  num = String(num);
  //If the nth place is within the length, we use an algorithm to reveal it
  if(num.length >= nth){
    //Also cast the resulting element back to a number value using the '+'
    return +num[num.length-nth];
  }
  //Otherwise it is an understood '0'...for example 135, 5th place is '00135'
  else{
    return 0;
  }
}

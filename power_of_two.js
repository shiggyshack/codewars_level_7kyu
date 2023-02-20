//Create a function that determines if an integer, n, is a power of two or not. Return true if it is, return false if it is not.

function isPowerOfTwo(n){
  //This while loop will keep dividing by two until you can divide by two anymore
  while(n>1){
    n = n/2;
  }
  //If you ended up with a 1, that means that you were able to divide by two until you get a 1...last step 2/2 = 1
  if(n === 1){
    return true
  }
  //If it is anything else, like 1.5, you would get a false meaning two was not a factor of the final step...last step 3/2 = 1.5
  else{
    return false
  }
}

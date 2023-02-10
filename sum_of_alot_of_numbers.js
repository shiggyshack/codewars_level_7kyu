//Create a function that if given n a positive integer, will return the sum of the numbers from 1 to the positive integer. Return false, if n is not a positive integer
function f(n){
  //This conditional will check the type of data n is, if it is an integer, and if it is positive
  if(typeof n === 'number' && Math.floor(n) === n && n > 0){
    //The return formula calculates the sum of integers 1 to n
    return n*(n+1)/2
  }
  else{
    return false
  }
}

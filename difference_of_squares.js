//Create a function, accepting an integer n as the parameter, that returns the difference of (1 + 2 + ... + n)^2 and 1^2 + 2^2 + n^2.
function differenceOfSquares(n){
  //Initialize two variables to hold the square of sums and the sums of squares.
  let sOfSums = 0;
  let sOfSquares = 0;
  //Use a for loop to find the total of 1 to n, inclusive.
  for(let i = 1; i <= n; i++){
    sOfSums += i;
  }
    //Square that value
    sOfSums *= sOfSums
  //Use a for loop to find the total of 1^2 to n^2, inclusive.
  for(let j = 1; j <= n; j++){
    sOfSquares += j*j;
  }
  //Return the difference of those values.
  return sOfSums - sOfSquares;
}

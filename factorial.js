//Create a function, that accepts a non-negative integer, and returns the factorial n! of that value. Factorial is an integer times all other integers until reaching the number 1. 0! is defined as equal to 1.
function factorial(n){
  //Conditional to check if n is non-negative
  if(n >= 0){
    //If n = 0, return 1 as 0! is defined as equal to 1.
    if(n === 0){
      return 1;
    }
    //Else, begin to iterate down from the value of n to 1, by increments of 1, and keep track of the changing product.
    else{
      let product = 1;
      for(let i = n; i > 0; i--){
        product *= i;
      }
      //Return that product once the loop has completed.
      return product;
    }
  }
}

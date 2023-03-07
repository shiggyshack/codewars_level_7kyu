//Create a currying function that first accepts an array as a parameter and then a multipier as a parameter and returns the a new array with each element multiplied by the multiplier.
//I chose to use arrow notation here in order to link my functions sequentially as a composite taking in new parameters each step
let multiplyAll =
    (arr) => 
      (mult) => 
//This final line is returning a new array using the .map function to multiply each element by the multiplier 
        arr.map(el=>el*mult);

//Create a function, which accepts a number as a parameter, and returns a statement based on whether or not the number is disarium or not. Disarium for example, is the number 89 because 8^1 + 9^2 equals 89.
function disariumNumber(n){
  //Cast the number to a string so it can be split into an array.
  let nArr = String(n).split('')
  //This variable will be used to hold the sum of the digits raised to a power based on their location in the number.
  let value = 0;
  //This loop will interate through every element in the array and sum each digit raised to a power, started with 1 and incremented by 1.
  for(let i = 0; i < nArr.length; i++){
    value += Math.pow(+nArr[i], i+1)
  }
  //If the value variable is actually equal to the original number (n), then the number was disarium; otherwise, it's not disarium.
  if(value === n){
    return 'Disarium !!';
  }
  else{
    return 'Not !!';
  }
}

//Create a function that takes in an array and sums the cubes of any values that are odd. If it contains any elements that are not numbers, return undefined.

function cubeOdd(arr) {
  //Create a variable to hold the sum.
  var sum = 0;
  //A for loop will be used to iterate through the array
  for (var i = 0; i <arr.length; i++){
    //Holds the cubed value of the individual element.
    var cubed = (arr[i]*arr[i]*arr[i]);
    //If cubed is NOT A NUMBER, return undefined
    if (isNaN(cubed)) return undefined;
    //Otherwise check is was odd and add it to the running sum
    if(cubed % 2 != 0 )sum += cubed;
  }
  //Return the running sum
  return sum;
}

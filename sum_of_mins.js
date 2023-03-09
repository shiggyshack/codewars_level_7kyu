//Create a function, which accepts a 2D array, and returns a sum of all minimum values from each array.
function sumOfMinimums(arr) {
  //This loop will sort each sub array in side of the larger array from least to greatest
  for(let i = 0; i < arr.length; i++){
    arr[i].sort((a,b)=>a-b)
  }
  //Create a variable to hold the sum of smallest elements
  let sum = 0;
  //This loop will pull the first element in each sorted array and add it to the sum variable.
  for(let i=0; i < arr.length; i++){
    sum += arr[i][0];
  }
  //Return the sum variable.
  return sum;
}

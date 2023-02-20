//Create a function that passes in an array of integers and removes duplicates, leaving the last occurance in the array.

function solve(arr) {
  //Reverse the array and create a new Set to make of unique elements, then reverse it so that the unique are back at the end of the array.
  return [...new Set(arr.reverse())].reverse();
}

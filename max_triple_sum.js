//Create a function, accepting an array of integers, and return the greatest possible sum using the three largest(without duplicates) elements.
function maxTriSum(numbers){
  //This line will create a new array variable removing all duplicates using the Set object and ...new to convert back to an array so methods can be used.
  const uniqueNums = [...new Set(numbers)];
  //Apply the .sort function to write the adjusted array in descending order
  uniqueNums.sort((a,b) => b - a);
  //Return the sum of the first three elements in the uniqueNums array which will not contain any duplicates and will be in descending order.
  return uniqueNums[0] + uniqueNums[1] + uniqueNums[2];
}

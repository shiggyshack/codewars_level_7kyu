//Write a funciton that takes an array of integers as its parameter and filters out all of the odd values.
function noOdds( values ){
  //Filter method will only keep the even numbers (%2==0) in the array
  return values.filter(x => x%2==0);
}

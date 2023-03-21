//Create a function, that accepts an integer, and return an array of length abs(n), where each element in the array is the sum of in the indices up to and including that element. Ex: n = 4 would return [0, 1, 3, 6}
function sumOfN(n) {
  //Holds 0 as the first element
  let ans = [+0];
  //Determine how many times to complete the for loop
  for(let i = 1; i <= Math.abs(n); i++){
    //Push negative integers to the array if n was a negative value
    if(n<0){
      ans.push(-i*(i+1)/2)
    }
    //Otherwise push postive integers
    else{
      ans.push(i*(i+1)/2)
    }
  }
  //Return the array that was formed from the completion of the for loop
  return ans;
}

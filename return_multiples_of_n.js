//Create a function, accepting two parameters, where the first parameter is the number of multiples of n that are to be repeated.
function multiples(m, n){
  //Create a new array to hold the multiples 1 to m of the number n.
  let mArr = [];
  //This for loop will add exactly m multiples
  for (let i = 1; i <= m; i++){
    //This will find the multiple to be .push to the new array 
    mArr.push(i*n)
  }
  //Return the new array after the for loop is completed.
  return mArr;
}

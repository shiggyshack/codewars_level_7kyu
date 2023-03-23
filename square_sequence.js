//Create a function, that accepts two integers as parameters, the first parameter is the number you begin with and the second number is the number of elements in the returned array.
function squares(x, n) {
  //If your second parameter is non-postive, return an empty array.
  if(n <= 0){
    return [];
  }
  //Otherwise, return a new array that begins with x and every other element in the element before squared. This should occur of length n times.
  else{
    let arr = [];
    //This first element is not squared; however, the first parameter give to the function.
    arr[0] = x
    //Every other element uses the element before squared.
    for(let i = 1; i < n; i++){
      arr.push(arr[i-1]*arr[i-1]);
    }
    //Return the new array formed.
    return arr
  }
}

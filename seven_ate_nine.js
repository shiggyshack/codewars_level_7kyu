//Create a function, that accepts a string of digits, and removes any '9' that is surround by '7' on both sides. Return the new string without these 9s.
function sevenAte9(str) {
  //Separate the str into an array
  str = str.split('')
  //Create a new array to hold the first element, since it can't be surrounded by 7's.
  let nStr = [str[0]]
  //Use a for loop to check elements 1 through .length - 2 .
  for(let i = 1; i < str.length - 1; i++){
    //If this conditional is met, continue search the array.
    if(str[i] === '9' && str[i-1] === '7' && str[i+1] === '7'){
      continue;  
    }
    //Otherwise, that element can be added to our new array.
    else{
      nStr.push(str[i])
    }
  }
  //Push the last element in the parameter array to the new array, since it can't be surrounded by 7's.
  nStr.push(str[str.length-1]);
  return nStr.join('');
}

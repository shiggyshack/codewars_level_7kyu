//Create a function, that accepts an array, and counts how many pairs of consecutive numbers are included in the array.
function pairs(ar){
  //Initialize the count variable.
  let count = 0;
  //Use a for loop, incrementing by 2s, to compare pairs index i, index i + 1
  for(let i = 0; i < ar.length-1; i+=2){
    //If the absolute value of the difference between consecutive pairs is equal to one, increase our count variable.
    if(Math.abs(ar[i]-ar[i+1]) === 1){
      count++
    }
  }
  //Return our count varible after searching the array.
  return count;
}

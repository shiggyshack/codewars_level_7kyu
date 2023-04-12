//Create a function, accepting two parameters, one of which is an array of donation values and other parameter is the goal for the average donation for n + 1 donations. Return the amount that would need to be donated by the last person in order to meet the newavg set.
function newAvg(arr, newavg) {
  //Create our return variable)
  let out = 0;
  //As long as our array is not empty, use .reduce to sum the parameter array and subtract it from n+1 times our goal average.
  if ( arr.length !== 0 ){
    let temp = newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0)
    //Round up this calculated value to the next whole integer.
    out = Math.ceil(temp)
  } 
    //Otherwise, return the new Average as the only donation
    else {
    out = newavg
  }
  //If the calculated value is less than or equal to 0, throw an error otherwise return the out value.
  return out <= 0 ? error : out;
}

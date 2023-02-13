//Given an array of integer values, return the smallest value that can be formed using the unique digits (without repeats)
function minValue(values){
  //Sort the values array from least to greatest
  let sorted = values.sort((a,b)=>a-b);'
  //Create a new array to hold the unique values
  let result = [];
  let prev;
  //Searches through sorted array and .push only one occurance to the new result array
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== prev) {
      result.push(sorted[i]);
      prev = sorted[i];
    }
  }
  //Joins the elements in the array to form them as one number
  return +result.join('');
}

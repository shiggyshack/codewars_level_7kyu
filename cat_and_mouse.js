//Create a function, accepting a string starting with 'C' and ending with 'm' that has '.' in between. The 'C' cat can catch the 'm' mouse if there are less than three '.' in between them.
function catMouse(x){
  //Changes x into an array instead of a string.
  x = x.split('')
  //Using conditional logic, determine if the array, which already includes 'C' and 'm', is longer than 5 characters. If so, the mouse can escape.
  if(x.length > 5){
    return 'Escaped!'
  }
  //Otherwise, the mouse will be caught.
  return 'Caught!'
}

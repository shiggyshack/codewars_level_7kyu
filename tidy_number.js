//Create a function, accepting a number as a parameter, that checks if the number is 'tidy' or not. A 'tidy' number is one that is non-decreasing or in other words the digits are written from least to greatest.
function tidyNumber(n){
  //.split, after the number is cast to a string, will turn the number into an array
  let d = String(n).split('')
  //.sort (a,b) => a-b will get the charactets in or from least to greatest, .join will place them as one, and Number() will cast them back to a number. If this is equal to the original value passed in, then the number was 'tidy'.
  return Number(d.sort((a,b)=>a-b).join(''))===n
}

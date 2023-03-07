//Create a function, which accepts a string as a parameter, convert the characters to their corresponding CharacterCodes and any occurence of 7 in the CharacterCodes convert to 1s. Then find the mathematical difference between the number with the 7s and the nyumbr with the 1s.
function calc(x){
  //Create the first total by splitting each character, mapping to the character code, and joining back the values
  let total1 = x.split('').map(char => char.charCodeAt(0)).join('');
  //Search through total1, using a global search, replace any occurences of 7s with 1s.
  let total2 = total1.replace(/7/g, '1');
  //Using .split to separate into individual digits, and .reduce to sum all the digits, find the totals of each total1 and total2
  let sum1 = total1.split('').reduce((sum, num) => sum + parseInt(num), 0);
  let sum2 = total2.split('').reduce((sum, num) => sum + parseInt(num), 0);
  //Calculate the mathematical differences between these two sums.
  return sum1 - sum2;
}

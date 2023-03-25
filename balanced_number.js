//Create a function, accepting a number as a parameter, and check to see if the number is balanced. Balanced refers to adding he digits on the lhs and rhs separately to see if you get the same sum. Do not include the single middle digit (if odd length) or two middle digits (if even length).
function balancedNum(number) {
  //Cast the number to string
  let numstr = number.toString();
  //Create variables to hold the lhs and rhs
  let leftside = "";
  let rightside = "";
  //This condition is met for smaller lengths, 3 or smaller.
  if (numstr.length/2 < 1 || numstr.length === 2) { 
    return "Balanced";
  }
  //If even length, run algorithm to slice from 0 to .length/2 - 1; otherwise, run algorithm to slice from 0 to .length/2.
  if (numstr.length % 2 === 0) {
    leftside = numstr.slice(0,numstr.length/2-1);
  } else {
    leftside = numstr.slice(0,numstr.length/2);
  }
  //RHS is sliced from .length/2+1 and beyond
  rightside = numstr.slice(numstr.length/2+1);
  
  //Using .reduce and parseInt to cast, sum the string elements and then using a comparision to return "Balanced" if equal, "Not Balanced" if not equal.
  let lefttotal = leftside.split("").reduce((a,b)=>parseInt(a)+parseInt(b));
  let righttotal = rightside.split("").reduce((a,b)=>parseInt(a)+parseInt(b));
  return (lefttotal === righttotal) ? "Balanced" : "Not Balanced";
}

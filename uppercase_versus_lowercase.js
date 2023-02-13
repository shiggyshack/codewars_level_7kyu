//Create a function that counts the occurances of uppercase and lowercase letters. If there are more uppercase than lowercase, change all of the letters to uppercase; otherwise, change them all to lowercase

function solve(s){
  //Create our counters
  let upper = 0;
  let lower = 0;
  //Using a for loop, update your counters to get a total of lowercase and uppercase
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      upper++;
    } else {
      lower++;
    }
  }
  //Depending on the totals, change the entire String to either all uppercase or all lowercase
  if (upper > lower) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}

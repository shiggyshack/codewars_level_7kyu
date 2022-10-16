// DESCRIPTION:

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let strN = str.toLowerCase()
    //Iterate through the str taking into account the number of times an 'x' or an 'o' appears
    let countX = 0
    let countO = 0
    for(let i = 0; i < strN.length; i++){
      if(strN.substring(i,i+1) == 'x'){
        countX++
      }
      if(strN.substring(i,i+1) == 'o'){
        countO++
      }
    }
    //Return true if these values are the same
  return (countX === countO) ? true : false
}
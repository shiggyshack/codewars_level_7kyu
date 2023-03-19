//Write a function, accepting a string as a parameter, that returns a new string where all of the even indices were moved to the front of the new string and all of the odd indices were moved to the end. 
function sortMyString(S) {
  //These new arrays will isolate the even index characters from the odd index characters.
    let evens = []
    let odds = []
    //This will turn S from a string into an array.
    S = S.split('')
  //Using a for loop to iterate through S array
  for(let i = 0; i < S.length; i++){
    //Decision is made here concerning which array to push the character to
    if(i % 2 === 0){
      evens.push(S[i])
    }else{
      odds.push(S[i])
    }
  }
  //Join the two sorted arrays into one, and return.
  let finalArr = evens.join('') + ' ' + odds.join('');
  return finalArr;
}

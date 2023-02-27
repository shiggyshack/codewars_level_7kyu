//Write a function, provided a string comprised of lowercase characters, that returns to variations of the string: one where every even index character is capitalized, and one where every odd index character is capitalized.
function capitalize(s){
  //Create variables to hold both options
  let evenCap = '';
  let oddCap = '';
  //Split the string into individual characters so we can iterate through each element now
  s.split('')
  for(let i = 0 ; i < s.length; i++){
    //Conditional checks if the index is even and updates the two new strings appropriately
    if(i % 2 === 0){
      evenCap += s[i].toUpperCase();
      oddCap += s[i];
    }
    //Else the index must have been odd and the strings are updated using the complementary rule
    else{
      evenCap += s[i];
      oddCap += s[i].toUpperCase();
    }
  }
  //Return the two variables inside of an array
  return [evenCap, oddCap];
};

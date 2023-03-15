//Create a function, that accepts an array of strings representing fruit, if the name of the fruit has the word "rotten" attached to the front, update the element in the array to stay the name of the fruit with the word "rotten" removed.
function removeRotten(bagOfFruits){
  //If the array is empty or null, return an empty array.
  if(bagOfFruits === [] || bagOfFruits === null){
    return []
  }
  else{
    //Iterate through each string contained in the array
    for(let i = 0; i < bagOfFruits.length; i++){
      //If the element contains the string 'rotten', then update the element using a .slice function starting after the 'rotten' string, leaving just the name of the fruit.
      if(bagOfFruits[i].indexOf('rotten') !== -1){
        bagOfFruits[i] = bagOfFruits.slice(5);
      }
    }
    //Return the updated bagOfFruits array.
    return bagOfFruits;
  }
}

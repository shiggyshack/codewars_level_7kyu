//Create a function, that accepts a parameter of an array full of strings, where the strings are names of fruits or names of fruits with the word "rotten" in front of them. The function should replace any element with the word 'rotten' with only the name of the fruit.
function removeRotten(bagOfFruits) {
  //If the array is empty or null, retrun an empty array.
  if (!bagOfFruits || bagOfFruits.length === 0) {
    return [];
  } else {
    //If the array has elements, use a for loop to iterate through each element.
    for (let i = 0; i < bagOfFruits.length; i++) {
      //If the element contains 'rotten', update that element using .replace and .toLowerCase() methods
      if (bagOfFruits[i].indexOf('rotten') !== -1) {
        bagOfFruits[i] = bagOfFruits[i].replace('rotten', '').toLowerCase();
      }
    }
    //Return the new array which will not contain any instance of the word 'rotten'
    return bagOfFruits;
  }
}


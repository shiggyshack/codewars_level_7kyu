//Create a function accepting a string of letters and an array of coordinates of elements in an array. Return the surviving characters after removing the elements of specified position in coords array.
function lastSurvivor(letters, coords) {
  //Change letters into an array to better remove elements.
  letters = letters.split('');
  //Using a for loop, iterate through each element in coords array.
  for (let i = 0; i < coords.length; i++) {
    //.splice will remove the one occurence of the element in the coords[i] position and repeat until all of coords array has been applied.
    letters.splice(coords[i], 1);
  }
  //Join the remaining elements using .join('') so a string will be returned of the remaining characters.
  return letters.join('');
}

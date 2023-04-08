//Create a function, accepting a string parameter, that takes every occurence of a lower case vowel and turns it to upper case.
function swap (string) {
  //Create an array from the string paramter
  string = string.split('')
  //Use a for loop to iterate through the string variable.
  for(let i = 0; i < string.length; i++){
    //Using conditional logic, determine when a lowercase variable occurs.
    if(string[i] === 'a' || string[i] ==='e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'){
      //Change the element .toUpperCase if found to be a vowel
      string[i] = string[i].toUpperCase()
    }
  }
  //Join all the elements of the array back together to form the output string.
  return string.join('')
}

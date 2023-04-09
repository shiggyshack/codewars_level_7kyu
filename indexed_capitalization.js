//Create a function, that accepts as its parameters a string and array of integers, return the string with the positions referenced in the array turned to upper case.
function capitalize(s,arr){
  //Separate the string into an array to easily pull out individual characters.
  s = s.split('');
  //Using a for loop, iterate through the array parameter
  for(let i = 0; i < arr.length; i++){
    //As long as the mentioned array position is within in the boundaries of the string array, update the position mentioned to upper case.
    if(arr[i] < s.length){
      s[arr[i]] = s[arr[i]].toUpperCase();
    }
  }
  //Return the adjusted string by using .join('') combine the elements together.
  return s.join('');
}

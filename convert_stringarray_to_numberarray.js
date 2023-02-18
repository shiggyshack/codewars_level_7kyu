function toNumberArray(stringarray){
  //Create a new array to hold the new elements pushed after they are cast to number values
  let nArray = []
  for(let i = 0; i < stringarray.length; i++){
    //Take every element and using the '+' convention, cast the string elements to numbers
    nArray.push(+stringarray[i])
  }
  //Return the new array, nArray
  return nArray;
}

reverse = function(array) {
  //Hold reversed array
  let nArray = [];
  //Starting the end element, push it to the new array
  for(let i = array.length-1; i >=0 ; i--){
    nArray.push(array[i]);
  }
  //Return the new array
  return nArray;
}

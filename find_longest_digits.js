//Given an array of integers, return the integer that has the most digits. If multiple integers tie for number of digits, return the first occurance

function findLongest(array){
  //Assume the first number has the most digits. Record that value and the index of 0
  let digits = String(array[0]).split('').length
  let place = 0
  //Create a for loop to compare all other numbers in the array to that 'largest' number of digits
  for(let i = 0; i < array.length; i++){
      //Upon finding an elements with more digits, update the values of digits and place (index)
      if(String(array[i]).split('').length>digits){
        digits = String(array[i]).split('').length;
        place = i;
      }
    }
  //The entire array has been traversed, return the first position the largest number of digits was found.
  return array[place];
}

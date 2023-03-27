//A number is considered "special" if the only digits used in the number are '0', '1', '2', '3', '4', or '5'. Write a function to test whether a number is special or not.
function specialNumber(n){
  //Assume the number is special until the for loop proves otherwise.
  let special = true;
  //Split the number into an array of digits as Strings.
  n = String(n).split('');
  //Iterate through the entire array looking for one instance of a non-special number.
  for(let i = 0; i < n.length ; i++){
    //If found, toggle the boolean to false, and break from the for loop.
    if(n[i] !== '0' && n[i] !== '1' && n[i] !== '2' && n[i] !== '3' && n[i] !== '4' && n[i] !== '5'){
      special = false;
      break;
    }
  }
  //This conditonal decides what message to return based on the boolean special.
  if(!special){
    return "NOT!!"
  }
  else{
    return "Special!!"
  }
}

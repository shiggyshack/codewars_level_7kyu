//Create a function, accepting a number as a parameter, and determine if that number is jumping (which means each digit is 1 unit from the next digit).
function jumpingNumber(n){
  nStr = n.toString();
  //If length of 1, automatically a "Jumping!!" number.
  if(nStr === 1){
    return "Jumping!!"
  }
  else{
    //If this for loop iterates through all pairs of digits without triggering on a pair whose .abs() !== 1, then the number is Jumping!!
    for(let i = 0; i < nStr.length-1; i++){
      if(Math.abs(+nStr[i] - +nStr[i+1]) !== 1){
        //If it finds one occurence, then it can stop searching and return "Not!!"
        return "Not!!"
      }
    }
    return "Jumping!!"
  }
}

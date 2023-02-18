function divCon(x){
  //Create new variables to hold the string and the number totals
  let numTotal = 0;
  let stringTotal = 0;
  //Using a for loop, interate through each element in the array.
  for(let i = 0; i < x.length; i++){
    //If the element is a string, cast it to a number, and add it to the stringTotal
    if(typeof x[i] === 'string'){
      stringTotal += +x[i]
    }
    //Otherwise it was a number and use it to update numTotal
    else{
      numTotal += x[i]
    }
  }
  //Return the difference of the numTotal and stringTotal values
  return numTotal - stringTotal;
}

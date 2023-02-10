//Create a function that calculates the life of a deodorant evaporator, given the percentage lost everyday, and the acceptable threshold remaining.

function evaporator(content, evap_per_day, threshold){ 
  //Using a logarithmic function to write the exponential decays
  let b = Math.log(1-(evap_per_day/100));
  let c = Math.log(threshold/100);
  //Return the ceiling of the ratio comparing the threshold to the remaining logarithms
  return Math.ceil(c/b);
}

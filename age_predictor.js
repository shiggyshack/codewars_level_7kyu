//Write a function, provided your great-grandparents ages at time of death, that will predict how long you will live to following an algorithm describe in the comments below.
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  //Create a variable, total, to hold the sum of all the ages squared
  let total = age1*age1 + age2*age2 + age3*age3 + age4*age4 + age5*age5 + age6*age6 + age7*age7 + age8*age8; 
  //Take the total's square root, divide that by 2, and then round down to the nearest integer, return that final value
  return Math.floor(Math.sqrt(total)/2);
}

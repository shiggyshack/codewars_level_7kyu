//Create a function, when a number is passed in, will return that value within a string statement where the number is padded for up to 5-digits with 0s.
function solution(value){
  //Cast the numeric value to a string.
  value = String(value)
  //Using .padStart function to determine the length and what character to pad with at the start of the number.
  value = value.padStart(5, '0')
  //Return the value within a string statement.
  return `Value is ${value}`
}

//Create a function that passes in an integer and test to see if that number is automorphic, meaning the square of the number ends in the number itself.
function automorphic(n){
  //Store the length of the number (how many digits)
  let len = n.toString().length
  //Square the number and slice the result as a string from the end using the length of the original number.
  let num = (n * n).toString().slice(-len)
  //If the two variables are equal to each other, then return 'Automorphic', else return 'Not!!'
  return (n == num) ? 'Automorphic' : 'Not!!'
}

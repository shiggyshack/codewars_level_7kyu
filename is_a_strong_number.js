function strong(n) {
  let sum = 0;
  let originalNum = n;

 //Peels of a digit at a time, finds the factorial of that digit, and adds it to a running total
  while (n > 0) {
    //Peels off the 'ones'
    let digit = n % 10;
    //Adds the factorial of that digit to the sum variable
    sum += factorial(digit);
    //Removes that digit and updates n value
    n = Math.floor(n / 10);
  }
 
  return sum === originalNum ? 'STRONG!!!!' : "Not Strong !!";
}

//Helper Function used to calculate the factorial of each digit individually
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    //Recursive function finding the product of a number times a (number - 1) until reaching 1
    return num * factorial(num - 1);
  }
}

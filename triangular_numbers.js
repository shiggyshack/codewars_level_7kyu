//Create a function that passes in an integer, n, which represents how many rows to the triangular numbers will be completed and sum the last element from each row
function sumTriangularNumbers(n) {
  //Variable to hold the running total
  let sum = 0;
  //For loop to go from row 1 to row n
  for(let i = 1; i <= n; i++){
    //Explicit formula used to find the last element in each row of the triangular numbers: 1, 3, 6, 10, 15,...
    sum += i*(i+1)/2;
  }
  //Return the running sum
  return sum;
}

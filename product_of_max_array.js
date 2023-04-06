//Create a function, accepting two parameters, that will find the maximum product of size n.
function maxProduct(numbers, size){
  //Sort the array in descending order
  numbers.sort((a,b)=>b-a)
  //Create a product variable = 1
  let product = 1;
  //Using a for loop, find the product of the first size elements in the array.
  for(let i = 0; i < size; i++){
    product *= numbers[i]
  }
  //Return that product
  return product
}

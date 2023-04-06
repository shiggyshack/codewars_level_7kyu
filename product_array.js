//Create a function, accepting an array as a parameter, that returns an array of the same size where each element is the product of the other elements in the original array.
function productArray(numbers){
  //New array to hold the products.
  let proArr = [];
  //For loop to push one element at a time to the return array.
  for(let i = 0; i < numbers.length; i++){
    //Our product variable is initialized
    let product = 1;
    //Find the product of all the elements in the parameter array.
    for(let j = 0; j < numbers.length; j++){
      product *= numbers[j]
    }
    //Push that value after dividing by the position of the corresponding element.
    proArr.push(product/numbers[i])
  }
  //Return the created product array.
  return proArr;
}

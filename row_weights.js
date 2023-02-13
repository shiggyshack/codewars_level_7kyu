//Given a list of weights, divide them into two team totals.

function rowWeights(array){
  //If there is only one weight, return that and 0 as an array.
  if(array.length == 1){
    return [array[0], 0];
  }
  //If there is an even number of weights, split them equally into alternating sums using a for loop that increments +=2
  else if (array.length%2 == 0){
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < array.length; i+=2){
      sum1 += array[i];
      sum2 += array[i+1];
    }
    return [sum1, sum2];
  }
  //If there is an odd number of weights, store the first weight and use a for loop, j += 2, to alternate the sums.
  else{
    let sum1 = array[0];
    let sum2 = 0;
    for(let j=1; j < array.length; j+=2){
      sum2 += array[j];
      sum1 += array[j+1];
    }
    return [sum1, sum2];
  }
}

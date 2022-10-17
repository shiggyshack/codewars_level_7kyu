// DESCRIPTION:

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
    //A sort function, returning -1, 0, or 1 is used to compare two elements at a time.
    function sortNumbers(a,b){
      return a - b
    }
    //.sort method would actually sort the numbers using their character code value, if sortNumbers method wasn't embeded.
    let newSort = numbers.sort(sortNumbers)
    return newSort[0] + newSort[1]
  }

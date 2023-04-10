function min(arr, returnType) {
  let minValue = arr[0]; // Initialize minValue with the first element of the array
  let minIndex = 0; // Initialize minIndex with 0

  // Loop through the array to find the smallest value and its index
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
      minIndex = i;
    }
  }

  // Return the result based on the returnType parameter
  if (returnType === 'value') {
    return minValue;
  } else if (returnType === 'index') {
    return minIndex;
  } else {
    // Return an error message if the returnType parameter is invalid
    return 'Invalid returnType. Please use either "value" or "index".';
  }
}

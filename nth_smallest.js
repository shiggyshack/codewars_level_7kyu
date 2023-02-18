//Given an array that contain positive, negative, and zero integers, return the nth smallest in the array without removing duplicates.
function nthSmallest(arr, pos){
  //Create a sorted array from the original array.
  let sorted = arr.sort((a,b) => a-b);
  //Return the element in the sorted array that is in the index of pos - 1 since the first index is at 0 (1st smallest)
  return sorted[pos-1];
}

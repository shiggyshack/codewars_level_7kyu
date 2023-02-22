//Provided an array of integers, sort them into evens and odds. The evens should be at the front of the new array, sorted from least to greatest. The odds should be at the end of the array sorted from greatest to least. Any duplicates should be removed from the array
function evensFromOdds(arr){
  //Create two new arrays to hold the sorted arrays
  let evenArray = [];
  let oddArray = [];
  //Use a for loop to sort and add the even/odds to their appropriate arrays
  for(let i = 0; i < arr.length; i++){
    if(arr[i]%2 == 0){
      evenArray.push(arr[i])
    }
    else{
      oddArray.push(arr[i])
    }
  }
  //Sort evens from least to greatest, sort odds from greatest to least
  evenArray.sort((a,b)=>a-b)
  oddArray.sort((a,b)=>b-a)
  //Merge the two arrays using .concat and use ...new Set() to remove duplicates.
  return [...new Set(evenArray.concat(oddArray))];
}

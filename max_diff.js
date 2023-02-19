//Given an array of unsorted integers, return the largest possible difference. If the list has one or fewer elements, return 0.
function maxDiff(list) {
  //As long as the list has more than one element
  if(list.length > 1){
    //Sort the list from smallest to largest
    list.sort((a,b)=>a-b);
    //Calculate the difference between the smallest and largest integers and return that value
    return list[list.length-1] - list[0];
  }
  //Otherwise the array isn't long enough and 0 should be returned
  else{
    return 0;
  }
}

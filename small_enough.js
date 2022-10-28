// DESCRIPTION:

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.


function smallEnough(a, limit){
    //iterate through each element of the array (a)
    for(let ele of a){
      //check to see if you find any element (ele) strictly greater than the limit
      if(ele > limit){
        //stop searching and return false
        return false
      }
    }
    //if no element (ele) has been found in the array that surpasses the limit, return true
    return true
  }
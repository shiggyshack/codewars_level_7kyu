//Create a function that passes in an integer and finds the largest possible integer by rotating digits off of the number (0-i) and placing them on the end, for example 1234 -> 2341 -> 2413 -> 2431 would return 2431 as the largest number

function maxRot(n) {
  //Immediately update a new array to hold the original value of n
  let arrayOfMax = [n];
  //Cast n to a String so that methods can be used to moved 'characters' around in n using functions built in for strings
  n = String(n);
  //Iterate through all characters up until the next to last one
  for(let i = 0; i < n.length-1 ; i++){
    //Create a new string using the .slice methods and changing our value of i using the for loop
    n = n.slice(0, i) + n.slice(i + 1)  + n[i];
    //Add each version of n to the array using the .push method
    arrayOfMax.push(n);
  }
  //Cast the array to integers instead of strings so that it can return a number after being sorted from greatest to least, return element 0.
  return +arrayOfMax.sort((a,b)=>b-a)[0];
}



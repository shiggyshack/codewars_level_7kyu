//Create a function, that when passed a string and an arr, will determine if the array contains all rotations of the string strng. If strng is empty, the return true.

function containAllRots(strng, arr) {
  if (strng === '') {
    return true;
  } else {
    //Variable created to control the for loop count
    const numRotations = strng.length;
    for (let i = 0; i < numRotations; i++) {
      //This variable will adjust where the slice takes place in the original strng variable instead of having to update strng over and over.
      const rotation = strng.slice(i) + strng.slice(0, i);
      //If that variation isn't present, return false; otherwise, keep iterating through the for loop until all iterations is complete.
      if (!arr.includes(rotation)) {
        return false;
      }
    }
    //If the loop has completed without triggering on a missing rotation, return true.
    return true;
  }
}

//Create a function that takes n, the number of blue beads in a pattern, and returns the number of red beads to complete the pattern. The pattern exists such that between every pair of blue beads is two red beads.
function countRedBeads(n) {
  //Just one blue bead will not require any red for the pattern.
  if(n < 2){
    return 0;
    //Two blue beads will require two red beads in between.
  }else if(n === 2){
    return 2;
    //All other variations of blue beads greater than 2 will require (2*n - 2) red beads to complete the pattern.
  }else{
    return 2*n-2;
  }
}

//Create a function add(n) which returns a function that always adds n to any number
function add(n) {
  //Calls upon another function which takes in a parameter and sums it to the parameter n.
  return function(x){
    return x + n;
  }
}

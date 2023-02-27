//Write a function, given your address as an integer and the n the number of houses on your street, that will determine the address of your neighbor across the street.
function overTheRoad(address, n){
  //Your neighbors address is the sum complement of (2*n+1)-address where n is how many houses on your street.
    return (2*n+1)-address;
}

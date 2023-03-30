//Create a function, that accepts a year as a parameter, and returns the number of times Friday the 13th would occur in that year.
function unluckyDays(year){
  //Create a variable to hold the count.
  let count = 0;
  //Using a for loop to iterate through January through December.
  for (let month = 0; month < 12; month++) {
    //Create a date object with the year and month fields completed and the date of 13.
    const d = new Date(year, month, 13);
    //If the day returns a 5, then it was a Friday.
    if (d.getDay() === 5) {
      //Update your counter
      count++;
    }
  }
  //Return the final number of Friday the 13ths computed.
  return count;
}

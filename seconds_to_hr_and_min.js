//Create a function, accepting a parameter of seconds, and returns the mumber of whole hours and minutes that would be comprised within the total number of seconds. You can disgard the number of seconds left over.
function toTime(seconds) {
  //Initialize the variables to hold hour and minute.
  let hrs = 0
  let min = 0
  //This division will return the whole number of hours held within the seconds parameter and Math.floor will only return an integer.
  hrs = Math.floor(seconds/3600)
  //This additional modulus will take the left over seconds and find out how many whole minutes will go into that value, again using Math.floor
  min = Math.floor(seconds%3600/60)
  //Return the two variables within a string literal.
  return `${hrs} hour(s) and ${min} minute(s)`
}

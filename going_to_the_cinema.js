//Create a function that compares two different movie viewing models. One where you purchase a card and your ticket is dicounted after every subsequent visit, and the other model where you pay a flat fee per visit. Return the number of times it will take for you to attend the movie so the card model is cost beneficial.
function movie(card, ticket, perc) {
  //Set our counter to 0, to be incremented inside the while loop, and the sysA and sysB to be their initial values.
  let count = 0;
  let sysA = 0;
  let sysB = card;
  //Continue to run this loop so long as Math.ceil(sysB) is greater than or equal to sysA.
  while (Math.ceil(sysB) >= sysA) {
    //Increment the sysA using the flat ticket value
    sysA += ticket;
    //Increment the sysB using the power function and the counter, incremented.
    sysB += ticket * Math.pow(perc, ++count);
  }
  //Return the count variable once the while loop was exited.
  return count;
}

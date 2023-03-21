//Create a function, that accepts a string parameter, and returns a message based off of certain characters that appear and how often they appear. There are four right side characters and four left side characters with different point values.
function alphabetWar(fight)
{
  //Create two variables to hold the totals.
  let lside = 0;
  let rside = 0;
  //Split the string into an array to be iterated through and gain the running totals.
  fight = fight.split('');
  for(let i = 0; i < fight.length; i++){
    //The point values are as listed below.
    if(fight[i] === 'w'){
      lside += 4;
    }if(fight[i] === 'p'){
      lside += 3;
    }if(fight[i] === 'b'){
      lside += 2;
    }if(fight[i] === 's'){
      lside += 1;
    }if(fight[i] === 'm'){
      rside += 4;
    }if(fight[i] === 'q'){
      rside += 3;
    }if(fight[i] === 'd'){
      rside += 2;
    }if(fight[i] === 'z'){
      rside += 1;
    }
  }
  //These are the messages based off of the point totals.
    if(rside > lside){
      return "Right side wins!"
    }else if(lside > rside){
      return "Left side wins!"
    }else{
      return "Let's fight again!";
    }
}

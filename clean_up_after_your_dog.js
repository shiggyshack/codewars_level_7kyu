//Create a function, accepting three parameters, which determines if a person has enough poop bags to clean up after their dog as they are walking them.
function crap(x, bags, cap){
  //Initialize a variable to represent the numbers of bags by their capacity to see how many poops can be collected.
  let total = bags*cap;
  //Parameter x is a 2-D array, so we will use nested for loops to search through the nested arrays.
  for(let i = 0; i < x.length; i++){
    for(let j = 0 ; j < x[i].length; j++){
      //If 'D' a dog is found, return "Dog!!"
      if(x[i][j] === 'D'){
        return "Dog!!"
      }
      //If '@' a poop is found, decrease our variable representing how many more poops can be collected.
      if(x[i][j] === '@'){
        total--;
      }
    }
  }
  //After the nested for loops completes, we either have used up all the bags or needed more bags. Using conditional logic, return one of two statements.
  if(total >= 0){
    return "Clean"
  }else{
    return "Cr@p"
  }
}

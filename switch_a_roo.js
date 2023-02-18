//Take a string as a parameter and return a new string where the letters 'a' and 'b' have been switched
function switcheroo(x){
  //Overright x to be an array
  x = x.split('');
  //Iterate through each element in the array
  for(let i = 0; i < x.length; i++){
    //If the element is = 'a', switch it to 'b'
    if(x[i] == 'a'){
       x[i] = 'b'
    }
    //If element is = 'b', switch it to 'a'
    else if(x[i] == 'b'){
      x[i] = 'a'
    }
  }
  //Return the array, but doing the elements to become the new string
  return x.join('');
}

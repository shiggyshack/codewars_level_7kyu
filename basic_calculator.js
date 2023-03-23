//Create a function, which accepts two numbers and an operator as a character, and returns the answer to that operation.
function calculate(num1, operation, num2) {
 if(operation === '+'){
   return num1 + num2;
 }if(operation === '-'){
   return num1 - num2;
 }if(operation === '*'){
   return num1*num2;
 }if(operation === '/'){
   //Catches the occurence of trying to divide by 0, return null.
   if(num2 === 0){
     return null;
   }
   //Return null if the operator isn't one of the four determined
   else{
     return num1/num2;
   }
 }else{
   return null
 }
  
}

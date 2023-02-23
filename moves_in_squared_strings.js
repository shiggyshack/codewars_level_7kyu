//Create a function that reverses each string's characters that are on independent new lines
function vertMirror(strng) {
  //arr will hold the larger string split into 'lines'
  var arr=strng.split('\n');
  //ans will hold the new elements which are the reversed lines
  var ans=[];
  //Passing through each element in the arr array, we will split into individual characters, so we can reverse, and then join back
  for (var i=0; i<arr.length; ++i)
    //Add that newly formed string to the new array
    ans.push(arr[i].split('').reverse().join(''));
  //Return that array after you join to make a new string with '\n' between each element
  return ans.join('\n'); 
}
//Create a function that changes the order of the lines in the longer string separated by the '\n' escape character
function horMirror(strng) {
  //Take strng, split it into an array, reverse the elements of the array, then join them back together using '\n' and return
  return strng.split('\n').reverse().join('\n');
}
//Call the previous two functions depeending on which is matched and pass in s as the string parameter
function oper(fct, s) {
  return fct==vertMirror?vertMirror(s):horMirror(s);
}

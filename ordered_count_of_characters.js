//Create a function, given a string, that will return a list of tuples, that counts the total occurence of characters in the string and in the order of which they appear.

const orderedCount = function (text) {
  //This creates a new empty Map object, which is used to store the counts of each character in the input string.
  const counts = new Map();
  //This is a loop that iterates over each character in the input string str. Inside the loop, it checks if the character is already a key in the counts Map object, and if so, increments its value by 1. If the character is not yet a key in the Map object, it sets its value to 1.
  for (const char of text) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }
  //This creates an array of keys from the counts Map object using Array.from(), and sorts the array based on the order of appearance of each character in the original input string str. The sort() function takes a comparison function as an argument, which returns a negative value if a should come before b in the sorted array, a positive value if a should come after b, and 0 if they are equal.
  const sortedChars = Array.from(counts.keys()).sort((a, b) => {
    return text.indexOf(a) - text.indexOf(b);
  });
  //This creates a new array by mapping each character in the sorted array sortedChars to a tuple that contains the character and its count from the counts Map object. The resulting array of tuples is then returned by the function.
  return sortedChars.map(char => [char, counts.get(char)]);
}

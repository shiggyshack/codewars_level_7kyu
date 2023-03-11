//Create a function, accepting two strings as parameters, and return a single string with the characters sorted but only one occurence of each character present.
function longest(s1, s2) {
  // Merge the two strings and convert them to a set to remove duplicates
  let merged = new Set(s1 + s2);
  // Sort the set and join the characters into a string
  let sortedChars = Array.from(merged).sort();
  let sortedStr = sortedChars.join('');
  return sortedStr;
}

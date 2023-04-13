function solve(a, b) {
  const uniqueChars = [];
  const combinedStr = a + b; // Combine both strings

  for (let char of combinedStr) {
    // Check if character is not present in both strings
    if (a.indexOf(char) === -1 || b.indexOf(char) === -1) {
      uniqueChars.push(char);
    }
  }

  // Join uniqueChars array into a string and return
  return uniqueChars.join('');
}

//Create a function that accepts a string and returns the characters all in upper case and with two spaces in between them.
function vaporcode(string) {
  // Use a regular expression to match only alphabetic characters
  const matches = string.match(/[a-zA-Z]/g);
  // If there are no matches, return an empty string
  if (!matches) {
    return '';
  }
  // Convert all matches to uppercase and add two spaces after each character
  return matches.map(match => match.toUpperCase()).join('  ');
}

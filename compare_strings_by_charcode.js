function compare(s1, s2) {
  if(s1 === '' || s2 === ''){
    return true;
  }
  
  if(s1 === null && s2 === null){
    return true;
  }
  
  if(s1 === null || s2 === null){
    return false;
  }
  

  // Convert strings to uppercase and remove non-alphabetic characters
  s1 = s1.toUpperCase().replace(/[^A-Z]/g, '');
  s2 = s2.toUpperCase().replace(/[^A-Z]/g, '');

  // Calculate character code sums
  let a = s1.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  let b = s2.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);

  // Compare character code sums and return the result
  return a === b;
}

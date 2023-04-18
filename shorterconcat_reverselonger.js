function shorter_reverse_longer(a,b){
  // Check which string is shorter
  let shorter = a;
  let longer = b;
  if (a.length >= b.length) {
    shorter = b;
    longer = a;
  }

  // Reverse the longer string
  let reversedLonger = longer.split('').reverse().join('');

  // Return the concatenated string
  return shorter + reversedLonger + shorter;
}

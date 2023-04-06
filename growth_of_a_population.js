function nbYear(p0, percent, aug, p) {
  let numYears = 0;
  while (p0 < p) {
    const increase = p0 * (percent / 100) + aug;
    p0 += increase;
    numYears++;
    if (increase <= 0) { // check if population is decreasing
      break;
    }
  }
  return numYears;
}

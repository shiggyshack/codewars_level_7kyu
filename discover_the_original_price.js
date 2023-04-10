function discoverOriginalPrice(discountedPrice, salePercentage){
  
  // Convert salePercentage to a decimal
  const percentage = salePercentage / 100;
  
  // Calculate original price by dividing sale price by (1 - percentage)
  const originalPrice = discountedPrice / (1 - percentage);

  // Round the original price to two decimal places
  const roundedOriginalPrice = parseFloat(originalPrice.toFixed(2));

  return roundedOriginalPrice;

}

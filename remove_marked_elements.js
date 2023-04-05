//Create a prototypal function, accepting two parameters, that takes an array and removes all occurences of the values found in a second array parameter. 

Array.prototype.remove_ = function(integer_list, values_list){
  //.filter is used to return an array that does not include values that are included in value_list array.
  return integer_list.filter(value => !values_list.includes(value))
}

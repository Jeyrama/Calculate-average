/*
Write a function which calculates the 
average of the numbers in a given list.
Note: Empty arrays should return 0.
*/


// Solution

let find_average = (array) => {
  return array.length === 0 ? 0 : array.reduce((acc, ind) => acc + ind, 0)/array.length
}

// or

function find_average(array) {
  if (array.length === 0) {
    return 0;
  }
  let result = 0;
  for (i=0; i<array.length; i++) {
    result +=array[i];
  }
  return result/array.length;
}
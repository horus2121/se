// 1. Create two functions: findSmallest and findLargest where these functions will take an array of numbers as a parameter. The findSmallest function returns the smallest number from the array while the findLargest returns the largest number from the array.
function findSmallest(array) {
  let min = array[0];
  for (let i of array) {
    if (i < min) {
      min = i;
    }
  }
  return min;
};

function findLargest(array) {
  let max = array[0];
  for (let i of array) {
    if (i > max) {
      max = i;
    }
  }
  return max;
};

const test = [4,5,2,4,5,6,2,4,2,9]
console.log(findSmallest(test));
console.log(findLargest(test));

// 2. Create a function printEven that takes an array of numbers and will return all even numbers from the array.
function printEven(array) {
  const evens = [];
  for (let i of array) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }
  return evens;
};

console.log(printEven(test));

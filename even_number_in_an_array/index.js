// 7 kyu Even numbers in an array:
//
// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
//
// For example:
//
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
  // good luck


  const result = array.filter(number => number%2 == 0);

  let sliced = result.slice(result.length - number)

  console.log("Array: ", array, "number: ", number, "even: ", result, "the last: ", sliced)

  return sliced

}

// Sample Tests:

// Test.describe("Basic tests",() => {
//   Test.assertDeepEquals(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
//   Test.assertDeepEquals(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
//   Test.assertDeepEquals(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);
// });

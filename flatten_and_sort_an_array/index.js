// 7 kyu Flatten and sort an array
//
// Challenge:
//
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
//
// Example:
//
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
//
// Addendum:
//
// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
//
// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!

    console.log("complicated array: ", array);

    let sorting = [];

    let simpleArray = array.map( (elements) => {

          elements.map( innerElements => sorting.push(innerElements))

    })

    let order = (x, y) => x - y;

    let sorted = sorting.sort(order);

    console.log("simple array: ", sorting, "method: ", simpleArray, "finish sorted: ", sorted);

  return sorted;
}

// Sample Tests:

// describe("Example test cases", function() {
//   Test.assertSimilar(flattenAndSort([]), []);
//   Test.assertSimilar(flattenAndSort([[], [1]]), [1]);
//   Test.assertSimilar(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   Test.assertSimilar(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
// });

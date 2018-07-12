// Given an array of one's and zero's convert the equivalent binary value to an integer.
//
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
//
// Examples:
//
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

// However, the arrays can have varying lengths, not just limited to 4.

// Solution:

const binaryArrayToNumber = arr => {

  return parseInt(arr.join(''), 2);
};

// Sample Tests:
// describe("One's and Zero's", () => {
//
//   it("Example tests", () => {
//       Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
//       Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
//       Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
//       Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
//   });
//
// });

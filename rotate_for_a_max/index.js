// 7 kyu Rotate for a Max:
//
// Let us begin with an example:
//
// Take a number: 56789. Rotate left, you get 67895.
//
// Keep the first digit in place and rotate left the other digits: 68957.
//
// Keep the first two digits in place and rotate the other ones: 68579.
//
// Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.
//
// You have the following sequence of numbers:
//
// 56789 -> 67895 -> 68957 -> 68579 -> 68597
//
// and you must return the greatest: 68957.
//
// Task
// Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.
//
// So max_rot (or maxRot or ... depending on the language) is such as:
//
// max_rot(56789) should return 68957
//
// max_rot(38458215) should return 85821534

function maxRot(n) {
  // your code

//   empty array to keep the new changed numbers

  let array = []

//   changing the number into a string

  let string = n.toString().split("")

//   using this variable to hold the shifted number

  let pushing = 0;

  for(let i = 0; i < string.length; i++ ){

//     retriving it from the array of numbers

    pushing = string.splice(i, 1)[0]

//     pushing it into the array of nmbers at the last position

    string.splice(string.length, 0, pushing)

//     loggin the shifted numbers

    console.log("shifted number: ", string)

//     pushing the new number into the empty array in number format

    array.push(Number(string.join("")))

  }

//   finding the maximum value in the array using the spread syntax

  let max = Math.max(...array, n)

  console.log("number: ", n, "array of numbers in string format: ", string, "new array: ", array, "Maximum: ", max)

//   ending the function

  return max

}

// Sample Tests:

// function testing(actual, expected) {
//     Test.assertEquals(actual, expected)
// }
//
// Test.describe("maxRot",function() {
// Test.it("Basic tests",function() {
//     testing(maxRot(38458215), 85821534);
//     testing(maxRot(195881031), 988103115);
//     testing(maxRot(896219342), 962193428);
//     testing(maxRot(69418307), 94183076);
// })})

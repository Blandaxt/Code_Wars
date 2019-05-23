// 7 kyu Ultimate Array Reverser:
//
// Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.
//
// Example:
// Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
// Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}

const ultimateReverse = s => {
  console.log("objectString: ", s)
  let result = s.join('').split('').reverse()

  let arr = [];

  let roll = s.map( element => {

    arr.push( result.splice(0,element.length).join(""))

//   console.log("elements: ", element.length)

  });

  console.log("reversed: ", result, "new array", arr);
  return arr;
};

// Sample Tests:

// const assert = require("chai").assert;
//
// describe("Ultimate Array Reverser Tests", () => {
//   it("should work on fixed tests", () => {
//     assert.deepEqual(
//       ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"]),
//       ["!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"]
//     );
//
//     assert.deepEqual(
//       ultimateReverse(
//         ["?kn", "ipnr", "utotst", "ra", "tsn", "iksr", "uo", "yer",
//          "ofebta", "eote", "vahu", "oyodpm", "ir", "hsyn", "amwoH"]
//       ),
//       ["How", "many", "shrimp", "do", "you", "have", "to", "eat",
//        "before", "your", "skin", "starts", "to", "turn", "pink?"]
//     );
//   });
// });

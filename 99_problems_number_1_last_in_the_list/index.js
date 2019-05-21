// ## 7 kyu 99 Problems, #1: last in list:
//
// Write a function last that accepts a list and returns the last element in the list.
//
// If the list is empty:
//
// In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option
//
// In languages that do not have an empty option, just return null

const last = xs => { /* Your code goes here ! */


 let result = xs[0] === undefined ? null:xs[xs.length -1];

 console.log(xs, xs.length -1, xs[xs.length -1]);

 return result;

 }

 // Sample Tests:

//  describe("last", function(){
//   it("should work with non-empty lists", function(){
//     Test.assertEquals( last([1,2,3]), 3, "last([1,2,3]) == 3");
//   });
//   it("should work with empty lists", function(){
//     Test.assertEquals( last([]), null, "last( [] ) == null");
//   });
// });

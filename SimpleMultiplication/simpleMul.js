// Simple Multiplication
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
//
// Solution:

function simpleMultiplication(n) {
    // your code........
    return n % 2 ? n * 9 : n * 8;
}
​
​
// Sample Tests:
//
// Test.describe("Basic Tests", function(){
//   Test.assertEquals(simpleMultiplication(2),16,'Should return given argument times eight...')
//   Test.assertEquals(simpleMultiplication(1),9,'Should return given argument times nine...')
//   Test.assertEquals(simpleMultiplication(8),64,'Should return given argument times eight...')
//   Test.assertEquals(simpleMultiplication(4),32,'Should return given argument times eight...')
//   Test.assertEquals(simpleMultiplication(5),45,'Should return given argument times nine...')
// });

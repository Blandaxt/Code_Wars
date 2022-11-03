
/*
8 kyu
Basic Mathematical Operations

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/


function basicOp(operation, value1, value2)
{
  // Code

  //take in the string values
  //out put the mathematical output base on the character and the numbers given

  // logging each argument
  console.log( operation, value1, value2);

  // creating an object to identify the operators and perform the function
  let symbols = {

    '+': function(x, y){ return x + y},
    '-': function(x, y){ return x - y},
    '*': function(x, y){ return x * y},
    '/': function(x, y){ return x / y},
    '-': function(x, y){ return x - y},

  };

  // holding the mathematical result in a variable
  let result = symbols[operation](value1, value2);

  console.log(result)

  // outputing the result
  return result;

}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
console.log("Basic tests\n");
Test.assertSimilar(basicOp('+', 4, 7), 11);
Test.assertSimilar(basicOp('-', 15, 18), -3);
Test.assertSimilar(basicOp('*', 5, 5), 25);
Test.assertSimilar(basicOp('/', 49, 7), 7);
  });
});


// Second solution of the same problem

// 8 kyu
// Square(n) Sum
//
// Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.
//
// For example:
//
// squareSum([1, 2, 2]); // should return 9

// Solution:

function squareSum(numbers){

  if( numbers.length == 0 ){ return 0 }

  console.log("array: \n", numbers )

  let squared = numbers.map( x => x * x )

   console.log("\n array_squared: \n", squared )

  const reducer = (previousValue, currentValue) => currentValue + previousValue;


  let sum = squared.reduce( reducer )

  console.log( "\n sum: \n", sum )

  return sum

}

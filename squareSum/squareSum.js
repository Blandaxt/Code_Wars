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
  return numbers.reduce((res,n) => res+n*n,0);

}

// Sample Tests:
//
// Test.assertEquals(squareSum([1,2]), 5)
// Test.assertEquals(squareSum([0, 3, 4, 5]), 50)

//
// 8 kyu
// Find numbers which are divisible by given number

// Complete the function which takes two arguments and returns all numbers which are divisible by given divisor. First argument is an array of numbers and the second is the divisor.
//
// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]


// different kind of solution that is not mines:

// function divisibleBy(numbers, divisor) {
//   return numbers.filter(n => n % divisor === 0)
// }



// Solution:
function divisibleBy(numbers, divisor){

  console.log(numbers, divisor)

 let array = []

  numbers.forEach( function (element){

    if(element % divisor === 0)
    array.push(element);

  })

  console.log(array)

  return array;

}

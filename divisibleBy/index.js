// 
// 8 kyu
// Find numbers which are divisible by given number

// Complete the function which takes two arguments and returns all numbers which are divisible by given divisor. First argument is an array of numbers and the second is the divisor.
//
// Example
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]






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

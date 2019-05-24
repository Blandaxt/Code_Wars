// 7 kyu JavaScript Array Filter: 
//
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
//
// The solution would work like the following:
//
// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
  // filter out the odd numbers

  let even = (num) =>{ return num % 2 === 0}

  let result = numbersArray.filter(even);

    console.log(numbersArray, "new array: ", result);

  return result;

}

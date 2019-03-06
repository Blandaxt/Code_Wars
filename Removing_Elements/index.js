// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.
//
// Example:
//
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
// None of the arrays will be empty, so you don't have to worry about that!






function removeEveryOther(arr){
  //your code here
  console.log(arr)

let filtered = []
   arr.filter(function(value, index, array){

  if(index%2 === 0)
  {
//     console.log(array)

    filtered.push(value);

  }

//     return array;

})
console.log(filtered);
return filtered;

// let answer = []
//   arr.map(function (current, index, array) {
//     if(index %2 === 0) {
//       answer.push(current)
//     }
//   })
//   console.log(answer)
//   return answer

}


// Sample Tests:

// Test.describe("Basic tests",_=>{
// Test.assertSimilar(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
// Test.assertSimilar(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
// Test.assertSimilar(removeEveryOther([[1, 2]]), [[1, 2]]);
// Test.assertSimilar(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
// })

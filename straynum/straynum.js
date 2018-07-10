// 7 kyu
// Find the stray number


// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
// Complete the method which accepts such an array, and returns that single different number.
//
// The input array will always be valid! (odd-length >= 3)
//
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(array){
  debugger;
  for(var i = 0; i < array.length; i++){
    if(array[i] === array[i+1]){
      if(array[i] === array[i+2]){
      } else {
        return array[i+2];
      }
    } else if(array[i] !== array[i+2]){
      return array[i]
    }
  }
}

// Test.assertSimilar(stray([1, 1, 2]), 2);

// 8 kyu
// Enumerable Magic #4 - True for None?
//
// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.
//
// Solution:

function none(arr, fun){
  // ...
   console.log(fun.toString());

   for(let i = 0; i < arr.length; i++){
   console.log(arr[i]);
    if(fun(arr[i]) == true) {
        return false;
      }
    }
    return true;
  }

//   Sample Tests:
//
// Test.assertEquals(none([1,2,3,4,5],function(item){ return item > 5 }), true)
// Test.assertEquals(none([1,2,3,4,5],function(item){ return item > 4 }), false)
// ​

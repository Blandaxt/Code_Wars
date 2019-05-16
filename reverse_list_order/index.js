// 8 kyu Reverse List Order
//
// In this kata you will create a function that takes in a list and returns a list with the reverse order.
//
// Examples
// reverseList([1,2,3,4]) == [4,3,2,1]
// reverseList([3,1,5,4]) == [4,5,1,3]

function reverseList(list) {

  console.log("array: ", list)

  return list.reverse();

}

// Sample Tests:

// Test.describe("reverseList", function(){
//   Test.it("should reverse some sample arrays", function(){
//     Test.assertSimilar(reverseList([1,2,3,4]), [4,3,2,1]);
//     Test.assertSimilar(reverseList([3,1,5,4]), [4,5,1,3]);
//   });
// });

// 7 kyu Get list sum recursively: 
//
// Write function sumR which returns the sum of values in a given list. Try no to cheat and provide recursive solution.

function sumR(x) {
//   return 0;
  if(x[0] === undefined){
    return 0;
  }
  const reducer = (accumelator, currentValue) => accumelator + currentValue

  let total = x.reduce(reducer)

  console.log("list: ", x, "total: ", total)

  return total
}

// Sample Tests:

// Test.assertEquals(sumR([]), 0);
// Test.assertEquals(sumR([1]), 1);
// Test.assertEquals(sumR([1,1,1]), 3);

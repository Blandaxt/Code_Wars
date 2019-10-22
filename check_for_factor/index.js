// 8 kyu Grasshopper - Check for factor

// Check for Factor
// This function should test if the factor is a factor of base.
//
// Return true if it is a factor or false if it is not.
//
// Information
// Factors are numbers you can multiply together to get another number.
//
// 2 and 3 are factors of 6 because:
//
// 2 * 3 = 6
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// In Javascript and C# you can use % to check for a remainder
// For example 2 is not a factor of 7 because:
//
// 7 % 2 = 1

function checkForFactor (base, factor) {
  // code here

  console.log("base: ", base, "factor: ", factor)

  let remainder = base % factor

  console.log("remainder: ", remainder)

  return remainder == 0 ? true: false
}

// Sample Tests:

// describe('check for factor', function () {
//   it('should return true', function () {
//     Test.assertEquals(checkForFactor(10,2), true)
//     Test.assertEquals(checkForFactor(63,7), true)
//     Test.assertEquals(checkForFactor(2450,5), true)
//     Test.assertEquals(checkForFactor(24612,3), true)
//   })
//   it('should return false', function () {
//     Test.assertEquals(checkForFactor(9,2), false)
//     Test.assertEquals(checkForFactor(653,7), false)
//     Test.assertEquals(checkForFactor(2453,5), false)
//     Test.assertEquals(checkForFactor(24617,3), false)
//   })
// })

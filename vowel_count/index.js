// 7 kyu Vowel Count:
//
// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, and u as vowels for this Kata.
//
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;

  // enter your majic here

  str.toLowerCase().split("").map( x => {

      /[aeiou]/.test(x) ? vowelsCount += 1: vowelsCount +=0;
  })

  console.log(str.toLowerCase(), vowelsCount)

  return vowelsCount;

  return vowelsCount;
}

// Sample Tests:

// describe("Case 1", function(){
//     it ("should be defined", function(){
//         Test.assertEquals(getCount("abracadabra"), 5)
//     });
// });

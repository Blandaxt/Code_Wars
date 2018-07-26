// 7 kyu
// Anagram Detection
//
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
//
// Note: anagrams are case insensitive
//
// Complete the function to return true if the two arguments given are anagrams of theeach other; return false otherwise.
//
// Examples
// "foefet" is an anagram of "toffee"
//
// "Buckethead" is an anagram of "DeathCubeK"
//
// Sample Tests:
//
// Test.assertEquals(isAnagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee')
// Test.assertEquals(isAnagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK')
// Test.assertEquals(isAnagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of WooT')
//
// Test.assertEquals(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble')
// Test.assertEquals(isAnagram("ound", "round"), false, 'Missing characters for test case ound, round')
// Test.assertEquals(isAnagram("apple", "pale"), false, 'Same letters, but different count')
//
// Solution:

let isAnagram = function(test, original) {
 return (test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join(''));
};

// Or/////////////////


let isAnagram = function(test, original) {

//check to see if same length
  if (test.length != original.length) {

    return false;
   }

  let origArr = original.toLowerCase().split('').sort();
  let testArr = test.toLowerCase().split('').sort();

  for (let i = 0, let j = origArr.length; i < j; i++) {

    if (origArr[i] !== testArr[i]){

      return false;
    }
  }
  return true;
}

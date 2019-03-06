// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.
//
// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
//
// If the length of the input string is 0, the return value must be 0.
//
// Example:
// "a" -> 1
// "aab" -> 2
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0






longestPalindrome=function(s){
  //your code here

  console.log(s)

  ifZero(s);

  ifOne(s);


//   a better way to check if the length of the string is only one or zero
//    if(!s || s.length <= 1) {
//     return s
//   }


 let longest = s.substring(0, 1)

  for(let i = 0; i < s.length; i++)
  {

    let temp = expand(s, i, i)

    console.log(temp, longest)

    if(temp.length > longest.length) {
      longest = temp
    }
    temp = expand(s, i, i + 1)
    if(temp.length > longest.length) {
      longest = temp
    }

  }

   return longest.length;

}




function ifZero(s)
{
console.log(s.length)
  if(s.length === 0){
    return 0;
  }
}

function ifOne(s)
{

  if(s.length === 1){
    return s.length;

  }
  }

const expand = (s, begin, end) => {
  while(begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
    begin--
    end++
  }
  return s.substring(begin + 1, end)
}


// Sample Tests:
// Test.assertEquals(longestPalindrome("a"), 1)
// Test.assertEquals(longestPalindrome("aa"), 2)
// Test.assertEquals(longestPalindrome("baa"), 2)
// Test.assertEquals(longestPalindrome("aab"), 2)
// Test.assertNotEquals(longestPalindrome("zyabyz"), 6, "Are you sure that is a palindrome?")
// Test.assertEquals(longestPalindrome("baabcd"), 4)
// Test.assertEquals(longestPalindrome("baablkj12345432133d"), 9)

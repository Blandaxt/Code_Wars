// 7 kyu Love vs friendship

// If　a = 1, b = 2, c = 3 ... z = 26
//
// Then l + o + v + e = 54
//
// and f + r + i + e + n + d + s + h + i + p = 108
//
// So friendship is twice stronger than love :-)
//
// The input will always be in lowercase and never be empty.

function wordsToMarks(string){
  //your code here

   let alphabetValue = {};

   for (i = 0; i < 26; i++) {


    let lowerCaseAlphabet = (i+10).toString(36)

    alphabetValue[lowerCaseAlphabet] = i + 1

    }

     console.log("alphabet value: ", alphabetValue)

     let arrayOfLetters = string.split('')

     let arrayOfNumbers = arrayOfLetters.map( x => alphabetValue[x])

     const reducer = (accumulator, currentValue) => accumulator + currentValue;

     let result = arrayOfNumbers.reduce(reducer)

     console.log("string: ", string, "letters array: ", arrayOfLetters, "numbers array: ", arrayOfNumbers, "result: ", result)

     return result;

}

// Sample Tests:

// describe("Basic tests",_=>{
//   Test.assertEquals(wordsToMarks("attitude"), 100);
//   Test.assertEquals(wordsToMarks("friends"), 75);
//   Test.assertEquals(wordsToMarks("family"), 66);
//   Test.assertEquals(wordsToMarks("selfness"), 99);
//   Test.assertEquals(wordsToMarks("knowledge"), 96);
// });

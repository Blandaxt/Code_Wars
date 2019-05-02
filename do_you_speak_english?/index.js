// 8 kyu
// Do you speak "English"?

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
//
// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
//
// Upper or lower case letter does not matter -- "eNglisH" is also correct.
//
// Return value as boolean values, true for the string to contains "English", false for it does not.


function spEng(sentence){
//write your code here

 let english = "english"

 let first = 0

 let second = 0

 console.log(sentence)

   let lower = sentence.toLowerCase()

//   let look = sentence.split("").map( (x, y) => sentence[y].toLowerCase() == english.split("").map( x => x) ? true: false)

//   console.log("Word: ", sentence, "split: ", sentence.split(""), "map: ", look)

    for(let i = 0; i < sentence.length; i++){

        if(lower[i] == "e"){

          first = i

          console.log("first: ", lower[i], first, sentence.length)

          }

          if(lower[i] == "h"){

          second = i + 1

          console.log("second: ", sentence[i], second)

          }


          if(lower.substring(first, second) == english){

            return true;

            }



    }

    return false;


}

// Sample Tests:

// Test.assertEquals(spEng("english"), true);
// Test.assertEquals(spEng("egnlish"), false);

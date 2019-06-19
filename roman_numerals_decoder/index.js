// 6 kyu Roman Numerals Decoder:
//
// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
//
// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
//
// Example:
//
// solution('XXI'); // should return 21
// Help:
//
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution(roman){
  // complete the solution by transforming the
  // string roman numeral into an integer

    let translateToNum =
    {

      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000

    }

    let total = 0;

    for( let numerals = 0; numerals < roman.length; numerals++){

      console.log(total)

      if( translateToNum[roman[numerals]] < translateToNum[roman[numerals + 1]]){

        total = total + (translateToNum[roman[numerals + 1]] - translateToNum[roman[numerals]])

        console.log(roman[numerals + 1], "-", roman[numerals], translateToNum[roman[numerals + 1]], "-", translateToNum[roman[numerals]], "total: ", total)

        return total

      }
             console.log("adding: ", total, "+", translateToNum[roman[numerals]],  translateToNum[roman[numerals + 1]] )

      total += translateToNum[roman[numerals]]

      console.log("index: ", numerals,"Character: ", roman[numerals], "value: ", translateToNum[roman[numerals]] )

    }

  console.log("Roman Numerals: ", roman, "Total: ", total)

  return total
}

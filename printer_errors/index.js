// 7 kyu Printer Errors:
//
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
//
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
//
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
//
// You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
//
// The string has a length greater or equal to one and contains only letters from ato z.
//
// #Examples:
//
// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"
//
// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"

function printerError(s) {
    // your code

    let array = s.split("").map( x => /^[a-m]+$/.test(x))

    let result = array.filter( wrong => wrong === false)

    let answer = result.length + "/" + s.length

     console.log("string: ", s, "length of string: ", s.length, "wrong letters: ", array, "all wrong letters: ", result, "length of wrong: ",  result.length, "answer: ", answer)

     return answer

}

// Sample Tests:

// Test.describe("printerError",function() {
// Test.it("Basic tests",function() {
//     var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
//     Test.assertEquals(printerError(s), "3/56")
// })})

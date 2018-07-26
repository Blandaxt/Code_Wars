// 8 kyu
// Century From Year
//
// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
//
// Task :
// Given a year, return the century it is in.
//
// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)
// Hope you enjoy it .. Awaiting for Best Practice Codes
//
// Enjoy Learning !!!
//
// Solution:

function century(year) {
  // Finish this :)
    //each 100 equals 1
  let aCentury = 100;
//   divide 100 by the given year
  let time = year/aCentury;
//   if the given year is less than 100, return the first century
  if(year<= aCentury) {

    return 1;
//     else if time which is year divided by 100 is greater than time rounded to the nearest whole number, then add 1 plus the rounded century and return it.
  } else if(time > Math.round(time)){

    return Math.round(time) + 1;
//     else if the given year is greater than 100, return the rounded time which is a whole number.
  }else if(year > aCentury) {

    return Math.round(time);
  }
}

console.log(century(3000));

// Sample Tests:
//
// Test.assertEquals(century(1705), 18, 'Testing for year 1705');
// Test.assertEquals(century(1900), 19, 'Testing for year 1900');
// Test.assertEquals(century(1601), 17, 'Testing for year 1601');
// Test.assertEquals(century(2000), 20, 'Testing for year 2000');
// Test.assertEquals(century(89), 1, 'Testing for year 89');

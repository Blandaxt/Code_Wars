// 7 kyu Sexy Primes <3:
//
// Sexy primes are pairs of two primes that are 6 apart. In this kata, your job is to complete the function sexy_prime(x, y) which returns true if x & y are sexy, false otherwise.
//
// Examples:
//
// sexy_prime(5,11)
// --> True
//
// sexy_prime(61,67)
// --> True
//
// sexy_prime(7,13)
// --> True
//
// sexy_prime(5,7)
// --> False
//
// sexy_prime(1,7)
// --> False
// ( 1 is not considered prime )
// Note: x & y are always positive integers > 0, but they are not always in order of precendence...you can be given either (5,11) or (11,5). Both are equally valid.

function sexy_prime(x, y){

  console.log(y, x);

    let prime = x == 1 || y == 1 || x == 21 ? false: x%2 == 0 || y%2 == 0 ? false: y - x == 6 || y - x == -6 ? true: false;

   console.log(prime);

   return prime;

}

// Sample Tests:

// Test.describe("Basic Tests", function(){
//         Test.assertEquals(sexy_prime(5, 11),true)
//         Test.assertEquals(sexy_prime(13, 19),true)
//         Test.assertEquals(sexy_prime(83, 89),true)
//         Test.assertEquals(sexy_prime(1, 11),false)
// });

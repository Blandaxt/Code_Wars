// 7 kyu
// Permutation Average
//
// A number is simply made up of digits.
// The number 1256 is made up of the digits 1, 2, 5, and 6.
// For 1256 there are 24 distinct permuations of the digits:
// 1256, 1265, 1625, 1652, 1562, 1526, 2156, 2165, 2615, 2651, 2561, 2516,
// 5126, 5162, 5216, 5261, 5621, 5612, 6125, 6152, 6251, 6215, 6521, 6512.
//
// Your goal is to write a program that takes a number, n, and returns the average value of all distinct permutations of the digits in n. Your answer should be rounded to the nearest integer. For the example above the return value would be 3889.
//
// n will never be negative
//
// A few examples:
//
// permutation_average(2)
// return 2
//
// permutation_average(25)
// >>> 25 + 52 = 77
// >>> 77 / 2 = 38.5
// return 39
//
// permutation_average(20)
// >>> 20 + 02 = 22
// >>> 22 / 2 = 11
// return 11
//
// permutation_average(737)
// >>> 737 + 377 + 773 = 1887
// >>> 1887 / 3 = 629
// return 629
// Note: Your program should be able to handle numbers up to 6 digits long
//
// Sample Tests:
//
// Test.describe("Basic tests",_=>{
// Test.assertEquals(permutationAverage(2), 2);
// Test.assertEquals(permutationAverage(25), 39);
// Test.assertEquals(permutationAverage(737), 629);
// Test.assertEquals(permutationAverage(1397), 5555);
// Test.assertEquals(permutationAverage(76853), 64444);
// })
//
// Solution:

function permutationAverage(n){
  let sum = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    sum += parseInt(n);
    n = n.slice(-1) + n.substring(0, n.length - 1);
  }
  return Math.round(sum/(n.length));
}

Or

function permutationAverage (n) {
  let numPerms = permute(n.toString()).map(x => +x);
  return Math.round((numPerms).reduce((a,b) => a+b)/numPerms.length);
}

function permute (str) {
  let arr = str.split(''), perms = [], rest, picked, restPerms, curr;
  if (arr.length === 0) return [str];
  for (var i = 0; i < arr.length; i++) {
    rest = Object.create(arr);
    picked = rest.splice(i, 1)[0];
    restPerms = permute (rest.join(''));
    for (var j = 0; j < restPerms.length; j++) {
      perms.push(picked + restPerms[j]);
    }
  }
  return perms;
}

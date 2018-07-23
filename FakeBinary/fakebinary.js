// 8 kyu
// Fake Binary
//
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//
// global main
// extern fakebin
//
// section .bss
// buffer:    resb  64
//
// section .data
// digits:    db  "45385593107843568", 0h0
//
// section .text
// main:
//     mov rdi, digits
//     mov rsi, buffer
//     call fakebin        ; rax <- 01011110001100111
//     ret
//
//
//
//
//     Sample Tests:
//
// Test.describe("Example tests",_=>{
// Test.assertEquals(fakeBin('45385593107843568'), '01011110001100111');
// Test.assertEquals(fakeBin('509321967506747'), '101000111101101');
// Test.assertEquals(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
// });
//
// Solution:

function fakeBin(x){

  let array = '';

//   let re = /x[i]/gi;

  for(i = 0; i < x.length; i++) {

    if( x[i] < '5') {

      array += '0';
//       array.replace(re, '0')

    }else if(x[i] >= '5') {

      array += '1';
//     array.replace(re, '1')

    }

  }

  console.log(x)
  console.log(array)
  return array;
//   return x;

}

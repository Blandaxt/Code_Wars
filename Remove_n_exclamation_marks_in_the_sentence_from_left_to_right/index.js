// 8 kyu
// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.
//
// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"


// function remove(s,n){
//   //coding and coding....

//   var words = s;

// const result = words.split('')

// console.log(result, s, n);

// //.map(word => word == "!"? "got it": "not it" );
// let count = n

// for(let i = 0; i <= result.length; i++){

//   console.log(result[i], i)

//     if(count != 0){

//      if(result[i] == "!"){
//             count -=1
//         result.splice(i, 1)

//         console.log("matches", result[i], i)
//       }
//   }

// }

// console.log(result, count);

// return result.join('');

// }

function remove(s, n) {
  //n is how many times we loop so we know how many ! to replace.
  for (let i = 1; i <= n; i++) {
    console.log('loop', i)
    s = s.replace('!', '');
    console.log(s)
  }
  return s;
}

// Sample Tests:

// describe("Basic Tests", function(){
//   it("It should works for basic tests", function(){
//
// Test.assertSimilar(remove("Hi!",1) , "Hi")
// Test.assertSimilar(remove("Hi!",100) , "Hi")
// Test.assertSimilar(remove("Hi!!!",1) , "Hi!!")
// Test.assertSimilar(remove("Hi!!!",100) , "Hi")
// Test.assertSimilar(remove("!Hi",1) , "Hi")
// Test.assertSimilar(remove("!Hi!",1) , "Hi!")
// Test.assertSimilar(remove("!Hi!",100) , "Hi")
// Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",1) , "!!Hi !!hi!!! !hi")
// Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",3) , "Hi !!hi!!! !hi")
// Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",5) , "Hi hi!!! !hi")
// Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",100) , "Hi hi hi")
// })})

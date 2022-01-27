// 7 kyu Shift Left
//
// You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.
//
// For Example:
//
// By applying a move to the string "where", the result is the string "here".
// By applying a move to the string "a", the result is an empty string "".
// Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.
//
// Notes
// Both strings consist of lowercase latin letters.
// If the string is already empty, you cannot perform any more delete operations.

function shiftLeft(s, t){
  // your code here

  let moves = 0

     console.log("s length: ", s.length, "t length: ", t.length, "s string: ", s, "t string: ", t)

  while(s !== t){

    if(s.length > t.length){

     s = s.substring(1)

     moves += 1

    } else if(t.length > s.length){

       t = t.substring(1)

       moves+= 1

    }else{

    t = t.substring(1)

    s = s.substring(1)

    moves+=2


    }

  }

     console.log("s length: ", s.length, "t length: ", t.length, "s string: ", s, "t string: ", t, "moves: ", moves)

  return moves;
}
// 
// Sample Tests:
//
// Test.assertEquals(shiftLeft("test", "west"), 2);
// Test.assertEquals(shiftLeft("test", "yes"), 7);
// Test.assertEquals(shiftLeft("b", "ab"), 1);

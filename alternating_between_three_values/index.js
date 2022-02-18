/*

Task:

Alternating Among Three Values
Suppose a variable x can have only three possible different values a, b and c, and you wish to assign to x the value other than its current one, and you wish your code to be independent of the values of a, b and c.

What is the most efficient way to cycle among three values? Write a function f so that it satisfies

  f(a) = b
  f(b) = c
  f(c) = a
EXAMPLE
  f( 3, { a:3, b:4, c:5 } ) => 4

*/

// Solution:

function f(x, cc) {

  // pseudo code

  /*

  f(a) = b
  f(b) = c
  f(c) = a

  */

  console.log("value: \n", x, "\n object: \n", cc)

  if( x == cc.a){

    console.log("\n result: \n", "b")

    return cc['b']

  }else

  if( x == cc.b){

    console.log("\n result: \n", "c")

    return cc['c']

  } else

    if( x == cc.c){

      console.log("\n result: \n", "a")

    return cc['a']

    }

  return -1;

}

// Sample tests:

/*

describe("Tests", () => {
  it("test", () => {
Test.assertEquals( f( 3, { a:3, b:4, c:5 } ), 4 );
Test.assertEquals( f( 4, { a:3, b:4, c:5 } ), 5 );
Test.assertEquals( f( 5, { a:3, b:4, c:5 } ), 3 );
  });
});

*/

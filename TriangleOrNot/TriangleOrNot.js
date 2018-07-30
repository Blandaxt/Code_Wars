7 kyu
Is this a triangle?

Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).



Solution:

function isTriangle(a,b,c) {
// triangle formula
  if (a+b<=c || a+c<=b || b+c<=a) {
//   return if true
    return false;
  } else {
//   else false
    return true;
  }
}

Sample Tests:

isTriangle(1,2,2); /* true */

isTriangle(7,2,2); /*false */

//
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
//
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
//
// -If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//
// -If he doesn't get 10 hoops, return the string "Keep at it until you get it".
//
// Solution:

function hoopCount (n) {
   //your code goes here
   if(n < 10) {
     return ("Keep at it until you get it");

   }else{
   return("Great, now move on to tricks");

   }
}

// Sample Tests:
//
// Test.assertEquals(hoopCount(3),"Keep at it until you get it" )
// Test.assertEquals(hoopCount(11),"Great, now move on to tricks" )

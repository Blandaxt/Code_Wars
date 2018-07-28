Furthest Distance

// You are given a array which contains sub-arrays. Each sub-array represents a point in a (2d) cartesian coordinate system.
//
// Create a function which returns the distance of the two points which are furthest apart.
//
// All distances are to be rounded to 2 decimal places. If the array contains two points return the distance between them. There will always be at least two points.
//
//
// furthestDistance([[1,2], [3,8], [4,3]]) // returns 6.32
// Distances between
//
// [1,2] [3,8] //6.32
//
// [3,8] [4,3] //5.10
//
// [1,2] [4,3] //3.16
//
// This link may help if you don't know how to work out the distance between two points.

function furthestDistance(arr){
   //code
//    setting result to 0
   let result = 0;
//    setting up 4 variables
   let x2 = 0, x1 = 0, y2 = 0, y1 = 0;
//    storing our math formula into the c variable
   let c = 0; /*Math.sqrt(Mathe.pow((y2 - y1), 2) + Mathe.pow((x2 - x1), 2))*/

   let values = [];
//    using a for each loop to get into the first array
   arr.forEach(function (currentArray, index) {
//    y2 is the second element in the first array element
     y2 = currentArray[1];
//      x2 is the first element in the first array eleemtnx
     x2 = currentArray[0];
//      setting up a for loop to go through each array element
     for(let i = 0; i < arr.length; i++) {
//      setting up the variables
       x1 = arr[i][0];

       y1 = arr[i][1];

         c = Math.sqrt(Math.pow((y2 - y1), 2) + Math.pow((x2 - x1), 2))

         values.push(c);

     }
   })

//    console.log(Math.max(...values));

   result = Math.max(...values);


   return Number(parseFloat(result).toFixed(2));
}

// Sample Tests:
//
// Test.assertEquals(furthestDistance([[3,8],[10,4]]), 8.06 )
// Test.assertEquals(furthestDistance([[1,1], [2,3], [5,5], [4,3], [3,3], [4,1], [2,2]]), 5.66)
// Test.assertEquals(furthestDistance([[1,2], [3,8], [4,3]]), 6.32)
// Test.assertEquals(furthestDistance([[33,33], [33,33], [33,33], [33,33], [33,33]]), 0)
// ​

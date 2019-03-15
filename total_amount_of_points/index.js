// 8 kyu
// Total amount of points

// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
//
// For example: ["3:1", "2:2", "0:1", ...]
//
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
//
// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:
//
// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
  // your code here
//   console.log(games)
    //expected output games [array]

//   let total = games.reduce((sum, value) => sum + value);


  let totalx = []

  let totaly = []

//   console.log(total)

  for (let o of games) {
  console.log(o);
  // expected output: games[element]

  let x = o.charAt(0)

  let y = o.charAt(2)

//     console.log(x, y)

    totalx.push(Number(x))

    totaly.push(Number(y))

    console.log("x array :", totalx, "y array: ", totaly)



  }

    let total = totalx.reduce((sum, value) => sum + value);

    console.log("Total: ", total)

    total = point(total, totalx, totaly)

    console.log("Total-changed: ", total)

  return total;
}

function point(total, x, y){

  let score = 0

  console.log("point: ", total, x, y)

  for(let i = 0; i < x.length; i++){

    if(x[i] > y[i]){

      score = score + 3

    } else

      if( x[i] < y[i]){

        score = score

      }else

        if( x[i] == y[i]){

          score = score + 1

        }

        console.log(score)

  }

  return score;

}


// Sample Tests:

// describe("Basic tests", function(){
//   it("Testing for points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'])", function(){
//     Test.assertEquals(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
//   });
//   it("Testing for points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4'])", function(){
//     Test.assertEquals(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
//   });
//   it("Testing for points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4'])", function(){
//     Test.assertEquals(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
//   });
//   it("Testing for points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4'])", function(){
//     Test.assertEquals(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
//   });
//   it("Testing for points(['1:0','2:0','3:0','4:4','2:2','3:3','1:4','2:3','2:4','3:4'])", function(){
//     Test.assertEquals(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);
//   });
// });

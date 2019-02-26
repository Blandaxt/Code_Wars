// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!
//
// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.
//


// Sample Tests::
// describe("KataTests", function(){
//   it("exampleTests", function(){
//     Test.assertEquals(dontGiveMeFive(1,9), 8);
//     Test.assertEquals(dontGiveMeFive(4,17), 12);
//   });
// });



function dontGiveMeFive(start, end)
{

//   create a count that will return a result
//   create a loop that will iterate from start to end
//   create an if condition that will exclude any number that has a 5 in it

  let count = 0

  for(let beginning = start; beginning <= end; beginning++)
  {

//     console.log(beginning, end);

    if(isItFive(beginning)){

      count = count

    }else{

    count++;

    }

//     console.log(count)

  }

  function isItFive(five)
  {
    let indext = 0;
    let numberFive = five.toString()

//     console.log(five)

    for(let i = indext; i < numberFive.length; i++){

//     console.log(i)

    if(numberFive.charAt(i) === "5")
    {
      console.log(numberFive.charAt(i))

      return true;

    }

    }

  }

  return count;
}

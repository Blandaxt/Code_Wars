// 8 kyu
// Counting sheep...

// Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//
// For example,
//
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
//
// Hint: Don't forget to check for bad values like null/undefined
//


function countSheeps(arrayOfSheep) {
  // TODO May the force be with you

//   counter
  let count = 0

  console.log(arrayOfSheep)

//   loop through the array
  for(let i = 0; i < arrayOfSheep.length; i++)
  {

    console.log("i", i)

//   false = count not increasing
    if(findTheSheep(arrayOfSheep[i]))
    {

      count = count

//     anything else, count increases
    }else{

      count++

    }

  }
    return count;
}

  function findTheSheep(sheep)
  {

    console.log("sheep", sheep)

    if( sheep == false)
    {

      return true;

    }else if(sheep == null)
    {

      return true;

    }else if(sheep == undefined)
    {

      return true;

    }else{

      return false;

    }

  }

  // Sample Tests:

//   var array1 = [true,  true,  true,  false,
//               true,  true,  true,  true ,
//               true,  false, true,  false,
//               true,  false, false, true ,
//               true,  true,  true,  true ,
//               false, false, true,  true ];
//
// Test.expect(countSheeps(array1) == 17, "There are 17 sheeps in total")

// ## 7 kyu The Office I - Outed:
//
// Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.
//
// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.
//
// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.
//
// Happiness rating will be total score / number of people in the room.
//
// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

function outed(meet, boss){

console.log("object: ", meet, "boss: ", boss, "total keys: ", Object.keys(meet).length, "Array of values: ", Object.values(meet), "value of boss: ", meet[boss], "number in the array for boss: ", Object.values(meet)[Object.values(meet).indexOf(meet[boss])])

const reducer = (accumulator, currentValue) => accumulator + currentValue;

 let valueBoss = meet[boss]

  if(meet[boss] === Object.values(meet)[Object.values(meet).indexOf(meet[boss])]){

    valueBoss = valueBoss * 2

    meet[boss] = valueBoss

    console.log("object new value: ", meet)

  }

  let valueArray = Object.values(meet)

  let happiness = valueArray.reduce(reducer) / Object.keys(meet).length;

    let result = happiness <= 5 ? "Get Out Now!": "Nice Work Champ!"

    console.log("reduced array: ", valueArray.reduce(reducer), "amount of people: ", Object.keys(meet).length, "happiness rating: ", happiness, "result: ", result)

    return result;

}

// Sample Tests:

// Test.describe("Example tests",_=>{
// Test.assertEquals(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!');
// Test.assertEquals(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'), 'Nice Work Champ!');
// Test.assertEquals(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'), 'Get Out Now!');
// })

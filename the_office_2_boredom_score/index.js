// 7 kyu The Office II - Boredom Score:
//
// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.
//
// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.
//
// Each department has a different boredom assessment score, as follows:
//
// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25
//
// Depending on the cumulative score of the team, return the appropriate sentiment:
//
// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

function boredom(staff){

  let department = {
    accounts:1,
    finance:2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
  }

  department["pissing about"] = 25

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let score = Object.keys(staff).map( x => department[staff[x]])

  let result = score.reduce(reducer)

  let boredomStatement = result <= 80 ? "kill me now": result < 100 && result > 80 ? "i can handle this": "party time!!"

    console.log("department: ", department, "staff: ", staff, "keys: ", score, "total boredom score: ", result, "Yell it!: ", boredomStatement);

    return boredomStatement


}

// Sample Tests:

// Test.describe("Example tests",_=>{
// Test.assertEquals(boredom({tim: 'change', jim: 'accounts',
//   randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
//   laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
//   mr: 'finance' }), 'kill me now');
// Test.assertEquals(boredom({ tim: 'IS', jim: 'finance',
//   randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
//   katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
//   alex: 'regulation', john: 'accounts', mr: 'canteen' }), 'i can handle this');
// Test.assertEquals(boredom({ tim: 'accounts', jim: 'accounts',
//   randy: 'pissing about', sandy: 'finance', andy: 'change',
//   katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
//   john: 'retail', mr: 'pissing about' }), 'party time!!');
// })

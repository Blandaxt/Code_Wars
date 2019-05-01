
// 8 kyu
// Is the date today

// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.
//
// Make sure that your function does not return a false positive by just checking just the day.

function isToday(date) {
  //Code goes here.

  let today = new Date();

   console.log("current date: ", date, "\n",
   "type of data: ", typeof(date), "\n",
   "convert date to a string format: ", date.toDateString(), "\n",
   "convert today to a string format: ",today.toDateString())

   if(date.toDateString() === today.toDateString()){

     return true;

   }
   else{

     return false;

   }

}

// Sample Tests:
//
// var tomorrow = new Date();
// tomorrow.setDate(tomorrow.getDate() + 1);
//
// var yesterday = new Date();
// yesterday.setDate(yesterday.getDate() - 1);
//
// Test.assertEquals(isToday(new Date()), true);
// Test.assertEquals(isToday(tomorrow), false);
// Test.assertEquals(isToday(yesterday), false);

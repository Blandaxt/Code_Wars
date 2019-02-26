//
// 7 kyu
// Day of The Week

// Oh no! I need to find out what day it is on a few particular dates. Help me figure it out. Return either Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday.
//
// Dates may be passed in as strings or as Objects.




// Solution:

let getDayOfTheWeek = date => ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date(date).getDay()];

 // Sample Tests:

 Test.assertEquals(getDayOfTheWeek('1/1/2017'), 'Sunday');

Test.assertEquals(getDayOfTheWeek('12/24/2015'),'Thursday');

Test.assertEquals(getDayOfTheWeek('2/24/1982'),'Wednesday');

Test.assertEquals(getDayOfTheWeek('6/2/1952'),'Monday');

Test.assertEquals(getDayOfTheWeek('8/21/1998'),'Friday');

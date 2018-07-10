// Let's create some scrolling text!
//
// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
//
// Example
// scrollingText("codewars") should return:
//
// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

function scrollingText(text){
var res = [];
for(let i = 0; i < text.length; i++){
res.push(text.slice(i).toUpperCase() +
text.slice(0,i).toUpperCase())
}
return res;
}

// Test.assertDeepEquals(scrollingText("abc"), ["ABC","BCA","CAB"])

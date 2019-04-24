var countSheep = function (num){
  //your code here

  console.log(num);
 const sheep = num => [...Array(num)].map((x, i) => `${i + 1} sheep...`).join("");

 console.log(sheep(num));

 return sheep(num);
}

// Sample Tests:

// Test.assertEquals(countSheep(1), "1 sheep...");
// Test.assertEquals(countSheep(2), "1 sheep...2 sheep...");
// Test.assertEquals(countSheep(3), "1 sheep...2 sheep...3 sheep...");

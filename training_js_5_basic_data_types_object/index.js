// 8 kyu
// Training JS #5: Basic data types--Object

// Training JS #5:
// Basic data types--Object
//
// In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}
//
// You can define the object attributes during initialization, like this:
//
// var animal={name:"dog"}
// you can also set/get some properties after the object definition, like this:
//
// var animal={}
// animal.name="dog"  (or animal["name"]="dog")
// #Task
// Give you a function ```animal```, accept 1 parameter:```obj``` like this:
//
// ```
// {name:"dog",legs:4,color:"white"}
// ```
//
// and return a string like this:
//
// ```
// "This white dog has 4 legs."
// ```
// When you have finished the work, click "Run Tests" to see if your code is working properly.
//
// In the end, click "Submit" to submit your code pass this kata.
//
// ##Series:
//
// ( ↑↑↑ Click the link above can get my newest kata list, Please add it to your favorites)


function animal(obj){

  let string = `This ${obj.color + " " + obj.name} has ${obj.legs} legs.`;

   console.log("object: ", obj, "string: ", string);

   return string;
}

// Sample Tests:
// 
// Test.assertSimilar(animal({name:"dog",legs:4,color:"white"}),"This white dog has 4 legs.");
// Test.assertSimilar(animal({name:"cock",legs:2,color:"red"}),"This red cock has 2 legs.");
// Test.assertSimilar(animal({name:"rabbit",legs:4,color:"gray"}),"This gray rabbit has 4 legs.");

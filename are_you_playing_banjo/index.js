// 8 kyu Are You Playing Banjo?


// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
//
// The function takes a name as its only argument, and returns one of the following strings:
//
// name + " plays banjo"
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
  // Implement me
  console.log("string: ", name, name.charAt(0))
  return name.charAt(0) === "R" ? name + " plays banjo": name.charAt(0) === "r" ? name + " plays banjo" : name + " does not play banjo";

}

// Sample Tests:

// Test.assertEquals(areYouPlayingBanjo("Martin"), "Martin does not play banjo");
// Test.assertEquals(areYouPlayingBanjo("Rikke"), "Rikke plays banjo");

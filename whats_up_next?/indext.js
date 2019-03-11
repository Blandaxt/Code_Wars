// 8 kyu
// What's up next?


// Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.
//
// When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.
//
// nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
// nextItem("testing", "t") # "e"

const nextItem = (xs, item) => {
  let found = false
  let finalValue
  console.log(xs, item)

  for (const i of xs) {
    if (found) {
      finalValue = i
      break
    }

    if (i === item) found = true
  }

  return finalValue
}



// Sample Tests:
//
// Test.assertEquals(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5), 6);
// Test.assertEquals(nextItem(['a', 'b', 'c'], 'd'), undefined);
// Test.assertEquals(nextItem(['a', 'b', 'c'], 'c'), undefined);
// Test.assertEquals(nextItem("testing", "t"), "e");
// function* countFrom(n) { for (let i = n; ; ++i) yield i; }
// Test.assertEquals(nextItem(countFrom(1), 12), 13);

// 7 kyu Consecutive letters:
//
// In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.
//
// For example:
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True

function solve(s){
    //..

    console.log("un-ordered: ", s)



    let order = s.split("").sort()


    console.log("order: ", order.join(""), order)


let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let judge = []

let start = abc.indexOf(order[0])


      for(let i = 0; i < order.length; i++){



        console.log("search: ", i, abc[start], start, order[i])

        abc[start] === order[i] ? judge.push(true):judge.push(false)



        start++


      }


      let master = judge.includes(false) ? false: true

       console.log(judge, master)

       return master



}

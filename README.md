Elements
![Bumps in the Road 2018-07-05 at 12.30.33 AM](carbump.png)



#CodeWars
I had to determine how man bumps("n") there is in an array and return the string "car dead" if there are more than 15 ("n") or return the string ("woohoo") if there is less.

##Learned

*I learned how to compare the array to each element in the array. I also learned the split method that counts every element in the array by using a separator.*


![Bumps in the Road 2018-07-05 at 10.46.25 PM](grasshoper.png)

#CodeWars
Summation
Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

##Learned

*I learned the proper use of PEMDAS.*

#CodeWars
Reversed Strings
Complete the solution so that it reverses the string value passed into it.

##Learned
 *Learned the methods split reverse and join that can be used to break up words and compounded elements apart to reverse them.*

 ![Reversed String 2018-07-06 at 9.46.23 AM](ReverseStr.png)


##CodewarBooleanValue

 Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

 <img width="1280" alt="screen shot 2018-07-03 at 10 32 32 pm" src="https://user-images.githubusercontent.com/39106582/42254669-d13207bc-7f15-11e8-9189-7e0028d7ef9f.png">

##Learned?

 *I learned more about ternary Operator and how it can simplify functions.*


##SumOfTwo

 Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
 For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
 [10, 343445353, 3453445, 3453545353453]should return 3453455.
 Hint: Do not modify the original array.

###Learned

 *I learned from doing the sum of two code war how to use the fat arrow function syntax and how to use the sort method on an array.*

##StringorNum

 Convert a Number to a String!
We need a function that can transform a number into a string.
What ways of achieving this do you know?

#learned

I learned how to use the filter method and used the exact comparison operator to get the answer.

##SmallestInArray

Given an array of integers your solution should find the smallest integer.
For example:
* Given [34, 15, 88, 2] your solution will return 2
* Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.


#Learned

*I learned from this codewar  i learned the sort method and how to use the math operator to find the smallest in the array*

##SentenceSmash

Sentence Smash
Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
var words = ['hello', 'world', 'this', 'is', 'great'];
smash(words); // returns "hello world this is great"

#learned

I learned that one method can do multiple functions.

## Find the stray number

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

## Learned

I learned from this code war kata that Loops are perfect for array problems. The hard part to solve it was to parse through the array and comparing it to each other element in the array. after solving that, it was easy to finish the rest.

## Scrolling text

Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

## Learned

I learned the text and the toUppercase method. By combining these two methods with the slice method, i can target each individual text and check for each of their combination.

## Ones and Zeros

Given an array of one's and zero's convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.

## Learned


I learned from this codewar that binary patterns of 0 and 1's can form a number and it holds a value of an integer. I also used the method i used before, .join.

##  Return Negative

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12
Notes:

The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

## Learned

This assignment was incredibly easy, but i still learned how to use my if conditionals more efficiently and to always log my results.   

## Deodorant Evaporator

This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.

## Learned:

I learned how to calculate a percentage loss. By how much the current rate of the foam lost everyday, i could increment how many days it would take before before the evaporator is no longer useful. This was the first time i used fractions in my calculations and used the arguments to solve the answer.  

##  Convert a Boolean to a String

In this programming exercise, you're going to learn about functions, boolean (true/false) values, strings, and the if-statement.

A function is a block of code that takes an input and produces an output. In this example, boolean_to_string is a function whose input is either true or false, and whose output is the string representation of the input, either "true" or "false".

A common idea we often want to represent in code is the concept of true and false. A variable that can either be true or false is called a boolean variable. In this example, the input to boolean_to_string (represented by the variable b) is a boolean.

Lastly, when we want to take one action if a boolean is true, and another if it is false, we use an if-statement.

For this kata, don't worry about edge cases like where unexpected input is passed to the function. You'll get to worry about these enough in later exercises.

## Learned:

In this code war, It brought back the fundamentals and how to use boolean values. I learned some shorter methods to represent the work flow using Es6 syntax. I also used the toString(); method again.

## Square(n) Sum

Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.

For example:

squareSum([1, 2, 2]); // should return 9

## Learned:

I learned the reduce() method from doing this code war. I learned how to use simple fat arrow functions that can be called inside methods.

## Simple multiplication

This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

## Learned:

I learned how to use Es6 syntax using the modulus operator.

## Function 3 - multiplying two numbers

This function has to be called multiply and needs to take two numbers as arguments, and has to return the multiplication of the two arguments.

FUNDAMENTALS

## Learned

I did not learn too much. I understood i had to create a simple multiplication operator function. Wished their was a simple method that would do the multiplication for me instead of having to use function. I will look that up for my future codewars.

## DNA to RNA Conversion

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a funciton which translates a given DNA string into RNA.

For example:

DNAtoRNA("GCAT") returns ("GCAU")

## Learned:

I learned the simple RegExp g Modifier that looks for a string of letters on a global scope. This way, it can find all the specified letters i am looking for and change them to the string i input into the function. I also used the const block function keyword so the function is run with strict. I also used the splace method that went well with the RegExp.   

## Fake binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

global main
extern fakebin

section .bss
buffer:    resb  64

section .data
digits:    db  "45385593107843568", 0h0

section .text
main:
    mov rdi, digits
    mov rsi, buffer
    call fakebin        ; rax <- 01011110001100111
    ret

##  Learned:

I used the for loops to iterate through the number string. Then i used the if conditional to measure if that number is greater or less than the string '5'. Then i finally replaced every number with either 1 or 0 depending if that number is less than 5 or greater or equal to 5.

I learned how to set up a variable holding an empty string that will switch to the desired string when it meets the requirements of the if conditional.

## Anagram Detection

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of theeach other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

## Learned:

 I learned how to set up an anagram in code. I learned the basics when comparing to string values and i learned how to shorten my solution that it saves time.

 The solutions are both O(n) in time complexity.

## Permutation Average

A number is simply made up of digits.
The number 1256 is made up of the digits 1, 2, 5, and 6.
For 1256 there are 24 distinct permuations of the digits:
1256, 1265, 1625, 1652, 1562, 1526, 2156, 2165, 2615, 2651, 2561, 2516,
5126, 5162, 5216, 5261, 5621, 5612, 6125, 6152, 6251, 6215, 6521, 6512.

Your goal is to write a program that takes a number, n, and returns the average value of all distinct permutations of the digits in n. Your answer should be rounded to the nearest integer. For the example above the return value would be 3889.

n will never be negative

A few examples:

permutation_average(2)
return 2

permutation_average(25)
>>> 25 + 52 = 77
>>> 77 / 2 = 38.5
return 39

permutation_average(20)
>>> 20 + 02 = 22
>>> 22 / 2 = 11
return 11

permutation_average(737)
>>> 737 + 377 + 773 = 1887
>>> 1887 / 3 = 629
return 629
Note: Your program should be able to handle numbers up to 6 digits long

## Learned

I used some array functions such as slice and made sure to turn all my inputs into strings. Then i check through the input using a for loop and adding every permutation to a sum. Then divide that sum by the length of the array. This gave me the average permutations.

##  Century From Year

Introduction
The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

Task :
Given a year, return the century it is in.

Input , Output Examples ::
centuryFromYear(1705)  returns (18)
centuryFromYear(1900)  returns (19)
centuryFromYear(1601)  returns (17)
centuryFromYear(2000)  returns (20)
Hope you enjoy it .. Awaiting for Best Practice Codes

Enjoy Learning !!!

## Learned:

I first got rid of my edge cases like any numbers less than 100. Then i focused on checking if i will get a decimal number from dividing the given year by 100. If i do get a decimal, i round it and add 1 to it. Lastly, i just returned any whole numbers divided by 100. This covered the range of any given number. This is a order 1 (O(1)) in runtime.

## Furthest Distance

You are given a array which contains sub-arrays. Each sub-array represents a point in a (2d) cartesian coordinate system.

Create a function which returns the distance of the two points which are furthest apart.

All distances are to be rounded to 2 decimal places. If the array contains two points return the distance between them. There will always be at least two points.


furthestDistance([[1,2], [3,8], [4,3]]) // returns 6.32
Distances between

[1,2] [3,8] //6.32

[3,8] [4,3] //5.10

[1,2] [4,3] //3.16

This link may help if you don't know how to work out the distance between two points.

## Learned

I learned to use multiple methods and the Pythagorean theorem to solve this code war. It was truly a challenge to get the decimal places in the right place.

## Is this a triangle?

Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

## Learned:

For a triangle to be formed, 2 sides have to be always greater than the third side. By summing and comparing the sides, i can determine if it is a triangle or not.

## Bubblesort Once

Bubblesort Algorithm
Overview
The Bubblesort Algorithm is one of many algorithms used to sort a list of similar items (e.g. all numbers or all letters) into either ascending order or descending order. Given a list (e.g.):

[9,7,5,3,1,2,4,6,8]
To sort this list in ascending order using Bubblesort, you first have to compare the first two terms of the list. If the first term is larger than the second term, you perform a swap. The list then becomes:

[7,9,5,3,1,2,4,6,8] // The "9" and "7" have been swapped because 9 is larger than 7 and thus 9 should be after 7
You then proceed by comparing the 2nd and 3rd terms, performing a swap when necessary, and then the 3rd and 4th term, then the 4th and 5th term, etc. etc. When you reach the end of the list, it is said that you have completed 1 complete pass.

Task
Program an algorithm in Javascript (or your selected language, if it is available) that performs exactly 1 complete pass (no more, no less :D) of the BubbleSort algorithm to a list of positive integers. You may assume all arguments provided are arrays containing at least 2 positive integers.

## Learned:

Learned the logic behind bubble swap technique and learned how to simply swap variables.

## Find heavy ball - level: novice

There are 8 balls numbered from 0 to 7. Seven of them have the same weight. One is heavier. Your task is to find its number.

Your function findBall will receive single argument - scales object. The scales object contains an internally stored array of 8 elements (indexes 0-7), each having the same value except one, which is greater. It also has a public method named getWeight(left, right) which takes two arrays of indexes and returns -1, 0, or 1 based on the accumulation of the values found at the indexes passed are heavier, equal, or lighter.

getWeight returns:

-1 if left pan is heavier

1 if right pan is heavier

0 if both pans weight the same

Examples of scales.getWeight() usage:

scales.getWeight([3], [7]) returns -1 if ball 3 is heavier than ball 7, 1 if ball 7 is heavier, or 0 i these balls have the same weight.

scales.getWeight([3, 4], [5, 2]) returns -1 if weight of balls 3 and 4 is heavier than weight of balls 5 and 2 etc.

So where's the catch, you may ask. Well - the scales is very old. You can use it only 4 TIMES before the scale breaks.

Too easy? Try higher levels:

## Learned

I learned a bit from this function. The function first passes in 2 parameters. One is the scale and the other is a set array. It then does a conditional where it compares the length of the array to 1. It then returns the first array. It then stores the two integers in the variable a. Then takes the length of the previous number a and stores in the variable b. Lastly it takes the value in a as the scales, and both values of a and b to calculate the weight. it passes in a and the calculated scale weight to see if it is less than 0. If it is, less than 0 return a. if not, return b.   

## Day Of The Week

Oh no! I need to find out what day it is on a few particular dates. Help me figure it out. Return either Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday.

Dates may be passed in as strings or as Objects.

## Learned

I used a function expression to solve this problem. I continued this process with Es6 syntax for Javascript. I created an array of the name of the day of the week inside an anonymous function that also includes the method new Date with .getday method. This resulted in the function returning a name of the day fo the week.

## Keep Up The hoop

Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

-If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".

-If he doesn't get 10 hoops, return the string "Keep at it until you get it".

## learned

I used an if function to choose through this Boolean answer. Then returned either one of the strings.

## Enumerable Magic #4 - True for None?

Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

## Learned:

I learned that using strictly equal to is not always correct for every functional problem.

1. I solved this problem by first login the function and changing it into a string readable value. This way i can see what is being evaluated.  

2. Then i created a for loop to go through the fed array in each function while logging each element in the array.

3. Then i created an if conditional that reacts if each function is true for their value.

4. If any of the functions return true, it would return false for the none function.  

## Don't give me five!

In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

Examples:

1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!

## Learned:

1. I solved this problem by first creating a for loop that started at the given start value and ending at the given end value.

2. Then i created an if condition inside the for loop that would increase the counter if the number 5 was not found, but leave the counter the same if the number 5 is found.

3. Then i went out of the function to create the function that would find 5 for me:

* First: Converting the number that is given into a string:  
* Second: Creating a for loop that would loop through that string.  
* Third: Comparing each character in that string to the string 5 if they exactly match.
* Fourth: If they match exactly, then the if returns true to the other if conditional which would not add to the counter.

## Counting sheep...

Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

## Learned/Process:

1. I started this function by writing some pseudo code for the variables i will need.

2. Then i created the variable counter which equaled 0 and started a for loop.

3. Then i created an if condition inside of my for loop that would look for the value types.

4. Then i called a function in the if condition that would take in the value from the array and return true or false.

5. Then i proceeded with creating my findTheSheep function which would only return false when it does not match any of the other value types that i was not suppose encounter such as null, undefined and false.

6. Lastly, i console logged some variables i wanted to keep watch on so i can see the process of the function.


## Jenny's secret message

Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

## Learned/Process:

1. i corrected the code by looking at the code logic and moved the if conditional and it's true bracket before where it returns the value of names if they are not Jhonny.


## Removing Elements:

Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

Example:

myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
None of the arrays will be empty, so you don't have to worry about that!

## Learned/Process:

1. I started this problem by first thinking of a way to remove every second element from the array.

2. I thought it would be easier if i used a criteria that targeted the index number of each element rather than the alue.

3. So i first console log the array so i can see the full length of what i am given.

4. Then i wrote created an empty array that would hold the items i want to keep by pushing the array items form the original array to my empty array.

5. Instead of using a for loop, i thought of using the filter method that would filter through the array and push the intended results to a new array which worked.

6. Then i thought of using the map method which is very similar to the filter method. Both functions worked similar and both worked out.

## Multiply:

The code does not execute properly. Try to figure out why.

## Learned/Process:

1. I understand that every language have different syntaxes that mean different writing forms are specific to that language. For example, PHP needs to have dollar sign ($) before the variables for every time the variable is mentioned. For C#, i have to mention the value type when ever i create it such (int, string, null) and so on. And while JavaScript is a simple operator with the value needing to be returned.

##longest_palindrome:

Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0

##Learned/Process:

1. I started this problem by first tackling this problem by first removing the edge cases by setting up some if conditions that would catch the characters if they only have one letter or no letters at all. If there is no given character, i would return 0, and if there is only one character, i would return that only character.

2. Then i wanted to target the first letter of the string and hold that value for later comparison by using the substring method.

3. I then created a for loop that would cycle through the given character as that is happening, i would call a new function within the for loop that is assigned to a variable and would take in the array, and the starting position fo the for loop.

4. Then i would create a conditional that would switch the longest substring with the temporary substring if the temporary substring was longer than the longest.

5. This would repeat it self until i would end up with the longest substring.

6. The function i called would be balancing several things.

* First: The function would be checking to see if the current values meet a while conditional loop.

* Second: If the values being passed in meet the condition where the beginning is greater than 0 and the end is less than the full length of the given characters and when both the beginning value and the ending value matches exactly.

* Third: If all of those conditions are met, then the beginning value would decrement by 1 and the ending value would increment by 1 until the longest substring has been found.   


## Is n divisible by x and y?

Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

Example:
isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
isDivisible(100,5,3)--> false because 100 is not divisible by 3
isDivisible(12,7,5)--> false because 12 is neither divisible by 7 nor 5

## Process/Learned:

1. The first step i took when solving this problem is to understand which operator i was going to use. When i saw the word is Divisible, i knew it meant division, but the problem was looking for the end result of that division and not the actual division which meant they are asking me to use the modulo operator.

2. Then i knew they were asking for a 0 remainder, this means that the rest was just setting up the logic. So then i went by first writing return because i knew whatever answer i get from my function i would want to return it out of the function block.  

3. Then i wrote some parentheses because i want whatever logic i write to finish running before returning the value.

4. Then i wrote the function if n is divisible by z and y while they both equal to 0 as the end result, then that is true and the function returns true. But i did not write it in an if else format because i knew that when it come s to Boolean values, the computer would sort out wether it is true or false.


## What's up next?

Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurrence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"

## Process/Learned:

1. I started this function problem by creating an anonymous function.

2. The anonymous function will be taking in to arguments. One the item we will be iterating over and the item will be looking for.

3. Then i create 2 variables, the first variable is a boolean golding the false value and the other is an empty variable.

4. Then i log the data we are iterating over and the item we are looking for, for the sake of clarity.

5. Then i start a for loop (for..of) which is the first time i am using it and see it in action.

6. Inside the for loop, i create a constant variable i and target the data wi will be iterating over.

7. Then i create a conditional that states if the boolean value i created turns form false to true, then have i equal the empty variable.

8. Then under that conditional i create another conditional that ask if the item we are looking for is equal exactly to i. If that is true, have the boolean variable equal true!

9. Once i have found i and the boolean variable is true, then the empty variable equal's the next item over by the item were looking for which matches the solution criteria which solves the problem.

* I have learned to use the for..of for loop style that lets me iterate over a multitude of different data types like strings, objects, arrays and so on.

* I have also learned to separate my conditionals where in the past i use to always link them as an else if.

* I also learned that if the iterator i is set inside another if conditional, it will not be the same as the previous conditional that is used to check if it matches.


## 8 kyu: Find numbers which are divisible by given number:

Complete the function which takes two arguments and returns all numbers which are divisible by given divisor. First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

## Learned/Process:

1. From this problem, i started the process by console logging the input and the number that is the divisor.

2. Then i created a variable that held an empty array.

3. Then i looped through the array using the for each method on the inputed array.

4. Then i compared each element in the array and looked at the remainder between a division with the divisor using the modulous operator. The remainder should equal to 0.

5. If the if conditional is true, then it will initiate a push of that element to the empty array. Problem finish!

## 8 kyu: Total amount of points:

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

## Process/Solutions:

1. I started this problem by console logging games to see what sort of arrays i am given.

2. Then i decided to split each string character into two different arrays of x and y.

3. then i used the for..of for loop to go through the games array.

4. While going through the games array, i am designating two variables x and y.

5. The x and y variables will hold the string representation position of each number in the games array elements.

6. Then i will be pushing these values into the x and y empty array while converting them to a number data type.

7. Then i will want to see what the results are, so i console logged both the x and the y array.

8. Then i thought why not use the reduce method to reduce the x array into a variable called total and return it, but unfortunately that was not the answer.  

9. So i instead created a function called point which would take in the x and y arrays and implement a score that would increment by a set value base on certain conditions.

10. The point function would loop through the x array and compare both the x and y array values to see if they meet the condition. Then it would increment score or do nothing if it met the conditions.

11. Then i would return that score value back to the first main function and return it as the answer.  


## 8 kyu Sum of positive:

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0

##Process/Learned:

1. This is my first C# kata outside of unity. I learned many different syntaxes that are different from JavaScript and just a tiny difference from unity c# framework after going through many docs in the Microsoft docs website.

*  https://docs.microsoft.com/en-us/dotnet/csharp/

2. I started this by console logging or should i say console writing the array for me to see while also creating a variable called sum that would hold the int data type of 0.

3. Then i moved into a for loop where i go through the array until i would reach the full length of the array.

4. Then i created an if conditional that would check if the element in the array equaled that same element under the absolute method.

5. if that conditional became true, it would add that number into sum and then i would return sum outside of the for loop which ends the function.

## 8 kyu Welcome!:

Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
The Database
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
Possible invalid inputs include:

IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was supplied

## Process/Learned:

1. I started this program by console logging the given string to see what i will work with.

2. Then i set my object values equal to a variable and fixed the object's quotes for the keys.

3. Then i set an if conditional to check if the languages variable object holds the language string being given and would output that given language for that matching string and return it.

4. Else i would return welcome in a string data type by default if i get any invalid string inputs and that ends the function.  

## 8 kyu Opposite number:

Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34

## Process/:Learned:

1. There wasn't much to learn from such a simple functional programming. Just basic multiplication tables.

2. Just multiplied the given input by -1 and return it.

## 8 kyu Find the force of gravity between two objects:

Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

input
Two arrays are give :

arr_val (value array), consists of 3 elements
1st element : mass of obj 1
2nd element : mass of obj 2
3rd element : distance between their centers
arr_unit (unit array), consists of 3 elements
1st element : unit for mass of obj 1
2nd element : unit for mass of obj 2
3rd element : unit for distance between their centers
mass units are :

kilogram (kg)
gram (g)
milligram (mg)
microgram (μg)
pound (lb)
distance units are :

meter (m)
centimeter (cm)
millimeter (mm)
micrometer (μm)
feet (ft)
Note
value of G = 6.67 x 10-11N.kg–2.m2

1ft = 0.3048m

1lb = 0.453592kg

return value must be Newton for force (obviously)

μ copy this from here to use it in your solution

## Process/Learned:

1. This was a very educational code-war where i had to look up some values up. I started this code-war like i always do by console logging the given input.

2. Then I stored the given gravity value i was given in a variable.  

3. Then I created a conversion function that would take each given string character and convert that letter into a numeric value base on the imperial and metric conversion system.

4. i use the pound and feet as the basis for each conversion.  

5. Then i googled the equation for the gravitational force between two objects(F = G * m1 * m2 / r2). Here is the site:

* https://socratic.org/questions/how-do-you-calculate-the-force-of-gravity-between-two-objects

6. And then i set the two arrays to match that equation and returned that value.

## 8 kyu Function 1 - hello world PHP:

Description:
Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

## Process/Learned:

1. Googled how to print and echo and turns out you only need return and the variable i stored it in. I actually don't need the variable. Just the return "hello world!". Nice quick code-war.  

## 8 kyu Abbreviate a Two Word Name:

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

## process/learned:

1. The first thing i did before i started this program is think how can i grab the initial character in the given string? How can i input a period? And how can i get the second character after the space character?

2. After thinking of these things, i start =ed the program by var_dump the given input.

3. After seeing the given input, i focused on creating some variables that would store each of the given characters i want. I knew i could get the first letter because it would always be at index 0. The difficult part was catching the second character and making sure the return is always an uppercase letter. The period in between could also be stored in a variable as a string.  

4. Then i created a for loop that would go through the string and  reach the total length.

5. Then i var_dump each of the given characters to see how can i grab the given characters.

6. Then i created an if factor that would catch the space character and store the next character after it.

7. Then i would return all these variables that contain the string value by concatenating them and putting them in the strtoupper method that would make sure every letter is uppercase. And that solves this function.  

## 8 kyu How many stairs will Suzuki climb in 20 years?:

Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

20_year_estimate = one_year_total * 20

You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
Make sure your solution takes into account all of the nesting within the stairs array.

Each weekday in the stairs array is an array.

sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
Your function should return the 20 year estimate of the stairs climbed using the formula above.

## Process/learned:

1. The first thing i did to solve this problem is visualize what i want to happen in from the input i am given. So first i console log the input.

2. After visualizing and seeing the input, i knew i had to have a for loop so i can go through the array of arrays.

3. I thought i might need a second for loop, but i thought instead of using an O of N^2, let me use an O^n function. So i googled the reduce method and how to use it on the MDN website.

4. Then i saw what i wanted to have the reduce method to do, which was adding every element in the inner array of arrays. I stored that function in a variable which i will use later.

5. Then i moved inside the for loop that i created and had sum which was the variable that would hold the total equal sum plus the reduce of every element in each individual array.

6. This gave me the total of numbers of every array which i multiplied by 20 which is the estimated amount of time to get the final result which i returned to end the function.   

## 8 kyu A wolf in sheep's clothing:

A wolf in sheep's clothing
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) === "Oi! Sheep number 1! You are about to be eaten by a wolf!"

warnTheSheep(["sheep", "sheep", "wolf"]) === "Pls go away and stop eating my sheep"

## Process/Learned:

1. The first thing i ddi to solve this problem is visualize how i would go through the given input which is an array data type.

2. Then i focused on taking a look at that data by console logging it.

3. Then i went and created a for loop that would start at the end of the array and decrement down until it reaches the first element in the array. I also created a counter variable that would hold a count and increment by 1 every time i go through each element in the array.

4. Then i formed an if conditional that would look for the last element in the array. If that element is the string wolf, it would return ("Pls go away and stop eating my sheep").

5. Else another conditional would be looking for the wolf string inside the array and would return the string ("Oi! Sheep number 1! You are about to be eaten by a wolf!") and the position of where the sheep that is about to be eaten is. The counter variable would hold that position because the less than or equal sign matches the index position in the array.   

## 8 kyu Simple Fun #1: Seats in Theater:
Task
Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.

The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

Example
For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be

seatsInTheater(nCols, nRows, col, row) === 96
Here is what the theater looks like:



Input/Output
[input] integer nCols

An integer, the number of theater's columns.

Constraints: 1 ≤ nCols ≤ 1000.

[input] integer nRows

An integer, the number of theater's rows.

Constraints: 1 ≤ nRows ≤ 1000.

[input] integer col

An integer, the column number of your own seat (with the rightmost column having index 1).

Constraints: 1 ≤ col ≤ nCols.

[input] integer row

An integer, the row number of your own seat (with the front row having index 1).

Constraints: 1 ≤ row ≤ nRows.

[output] an integer

The number of people who sit strictly behind you and in your column or to the left.

## Process/Learned:

1. I knew i wanted to multiply the rows by the colums, but i wasn't sure how to go about forming the equation.

2. I then thought to subtract the total amount of rows and colums by the current row and colum individually that we are located at.

3. For the rows, i had to subtract it by 1 then take the result from subtraction for both the colums and rows and multiply them together.

4. That result is the amount of people that he will block as he i trying to leave the theater.

## 8 kyu Sum Arrays:
Sum Array
Write a method sum (sum_array in python, SumArray in C#) that takes an array of numbers and returns the sum of the numbers. These may be integers or decimals for Ruby and any instance of Num for Haskell. The numbers can also be negative. If the array does not contain any numbers then you should return 0.

Examples
numbers = [1, 5.2, 4, 0, -1]
puts sum(numbers)
9.2
Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.

Disclaimer
This is for beginners so we want to test basic loops and math operations. Advanced users may find this extremely easy and can easily write this in one line.

## Process/Learned:

1. I started this fucntion with the assumption that i would be using the reduce method, but what i did not account for was for any edge cases.

2. First step i took was to create a console.log to see the input i am given and the result i am returning.  

3. Second step i took was to create my reduce function and store it in a const variable.

4. Third step was to call that reduce function in a reduce method that is targeting the given array.

5. Then i returned that result and saw i was getting errors. That is when i saw my edge case of an empty array and had to create and if conditional for that.

6. After i created the if conditional targeting the given array and see if it equal the null data type, i pressed the attempt button and i was getting all greens marks for the correct answer. Love it the end.

## 7 kyu Growth of a Population:

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be:
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be:
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

## Process/Learned:

1. The process i took for this problem was first to console.log the parameters i was given. Then i thought i should convert any integers i have that need to be in a certain form like my percentage. And have my starting variables like the total population i start with and the amount of years it would take from that initial population to reach the destination number the function gives me.

2. Since i knew my destination, i thought a while loop would be perfect for this function. So i set up my while loop to keep looping while the initial value is less than the destination value.

3. While this while loop is running i am doing my math equation where i am multiplying the percentage by the current amount and adding any augment like the amount of settlers that are added to the population. Then making that the new total.   

4. This keeps happening while the current value for the population is less than the destination value. And while that is happening i am adding the amount of years this is taking to happen and returning that value at the end once the loops finishes.

##8 kyu If you can't sleep, just count sheep!!:

If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

## Process/Learned:

1. For this problem, i had to think about how to use map, join, spread syntax and the array method.

2. The first thing i did was to see how much number the function gave me.

3. Then i created a variable which would hold the function that would take in the parameter as an array using the Array method.

4. Then i would map through this array and find the index of each Element in the new temp array by passing in 2 parameters into the function.

5. Then i use template literal to add the number of the input and the string sheep with the periods.

6. Then lastly, i would join them together in the array and return it at the end of the function.  

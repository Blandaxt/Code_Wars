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

## 8 kyu Beginner - Reduce but Grow:

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

## Process/Learned:

1. This problem was a bit easy. I knew the reduce function, so i knew hot to use operators to reduce an array.

2. So then i use the reduce method on a function i made that uses the multiply operator. And directed that method towards the array and return that value.  

## 8 kyu get character from ASCII Value:

Get character from ASCII Value

Write a function getChar/GetChar/get_char which takes a number and returns the corresponding ASCII char for that value.

Example:

getChar(65) # => 'A'

## Process/Learned:

1. This problem was one of the best discoveries I have ever had. Being able to pull up any character via a number is just a very interesting method.

2. After googling how to get character from a number I go the method String.fromCharCode(). Then i plugged in the variable and return the line of code. And i got the answer. Very nice and simple problem.

## 8 kyu Will there be enough space?

The Story:
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus.
wait is the number of people waiting to get on to the bus.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
enough(10, 5, 5);
// 0, He can fit all 5 passengers
enough(100, 60, 50);
// 10, He can't fit 10 out of 50 waiting

## Process/Learned:

1. In this problem, it was a simple if or else function.

2. First i created a console.log that would check each param and the total variable that i created that is the total passengers on the bus plus the amount of passengers waiting to get on the bus.

3. Then i set return 0 as the default return value and then i set it up a conditional that would check if the total variable is greater than the cap, it would return the total - the cap which is how many passengers are left.

## 8 kyu Student's Final Grade:

Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples:

finalGrade(100, 12);  // 100
finalGrade(99, 0);    // 100
finalGrade(10, 15);   // 100

finalGrade(85, 5);    // 90

finalGrade(55, 3);    // 75

finalGrade(55, 0);    // 0
finalGrade(20, 2);    // 0

Use Comparison and Logical Operators.

## Process/Learned:

1. For this problem, i had to make many if conditionals and use the and operator with it.

2. I started by console.log the parameters. Then i rant it through an initial if conditional to uses the OR operator to check if the given params for grade exam is over 100 or if the amount of projects completed is over 10. If true, the if would return 100.

3. The same is done for the other two if conditionals where if the parameters are over a given value, the conditional would return 90 or 75.

4. Lastly i had a default return of 0 if non of the of conditionals matches as true.  

##8 kyu Is the date today:

Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by just checking just the day.

## Process/ Learned:

1. This problem threw me off because i thought i only had to convert the date object to a string value in order to match it to the date object given. So i thought the .toString() method would solve it easily and all i had to do is return true or false if they matched.

2. I was wrong because i did not think about the time value in the date object. So i had to find out how to only get the date value to a string data the and ignore the time value. And that is where the .toDateString() method came in handy. It converts the date object to a string format and it excludes the time value allowing me to get every test attempt correct.   

## 8 kyu Do you speak "English"?:

Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.

## Process/Learned:

1. For this problem i used substring to solve the answer by grabbing the position of the first letter in english which is e and the last letter which is h and comparing it to a string english after converting the given word to lowercase.

2. The hardest part in solving this problem was because i was stacking my if conditions on top of each other thinking it would just follow one after each other. But i was running into problems where the second if condition would not fire.

3. So after separating each of my if conditions into individual components, my function worked perfectly. This has taught me that if conditions can sometimes bar each other from fire-ring if they are under the wrong stack.  

## 8 kyu Return the day:

Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"

## Process/Learned:

1. For this problem, from reading out the problem, i already knew this was a if else/switch case sort of problem. So then i decided to try out the conditional (ternary) operator.

2. I started by asking the function if the number that is given to me is between 1 and 7. If it is, i would return a day of the week. But if the number is greater then 7 or less than 1, i would return the default "Wrong, please enter a number between 1 and 7".

3. This is my first successful use of the ternary operator and i am feeling more confident using it in future functions.    

##  This is a sadly story #1: Are they opposite?

Instructions
Output
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it series #1:
Are they opposite?

#Task
Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

#Some examples:
isOpposite("ab","AB") should return true;
isOpposite("aB","Ab") should return true;
isOpposite("aBcd","AbCD") should return true;
isOpposite("AB","Ab") should return false;
isOpposite("","") should return false;

## Process/Learned:

1. In this problem, i knew i had to compare two different strings. And because i was lookin to see if their case sensitivity is opposite. So i first created an if conditional that would check if the two strings are equal from the beginning.

2. If the strings from a lower case base does not equal the same, then i know the words are different. I would return false for both of the conditionals.

3. Lastly, i would check the sort order and if the order of the words are of a different. If the sort order is different, i would also return false. Meaning they are not opposites. Otherwise, I would return true for all other cases.  

## Training JS #5: Basic data types--Object:

Training JS #5:
Basic data types--Object

In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

You can define the object attributes during initialization, like this:

var animal={name:"dog"}
you can also set/get some properties after the object definition, like this:

var animal={}
animal.name="dog"  (or animal["name"]="dog")
#Task
Give you a function ```animal```, accept 1 parameter:```obj``` like this:

```
{name:"dog",legs:4,color:"white"}
```

and return a string like this:

```
"This white dog has 4 legs."
```

## Process/Learned:

1. For this problem, i had to think how object data types behave and how to retrieve information from them. There are two ways to set and retrieve information from an object. First one is dot notation and second is bracket notation.

2. I am more comfortable with bracket notation so i used that instead. The first thing i did is console.log the object parameter i will be interacting with.

3. Then after seeing all the keys in the object, i knew which key to call and where inside of my template literal string.

4. After placing the correct object keys in their place in the string and returning it, i solved the problem.

## 8 kyu Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right:

Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

## Process/Learned:

1. This codewar was fairly difficult for me where i had to replace/remove the exclamation marks in the string.

2. At first i tried to use the splice method where i would remove any exclamation i ran into as the function loops through the string that is turned into an array.

3. That unfortunately did not work out, so i changed to the replace method where i replaced every exclamation mark with an empty string. That worked out wonderfully and i did not have to use any conditional for it.   

## 8 kyu A Strange Trip to the Market:

You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouldn't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "How much do people normally tip for something like this?" The artist looks up. "Its always gonna be about tree fiddy."

It was then that you realize the musician was a 400 foot tall beast from the Paleolithic era. The Loch Ness Monster almost tricked you!

There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A.) It is a 400 foot tall beast from the Paleolithic era B.) It will ask you for tree fiddy

Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note: It can also be written as 3.50 or three fifty.

## Process/Learned:

1. To solve this problem i thought of using multiple functions and ways to get each word by themselves and using substring. But i never imagined there existed such a convenient method like (.includes).

2. So i use .includes to search the strings for any of the phrases that are my targets that would give away the LockNessMonster. Once i found it, i would return the whole string.

3. What did throw me off was knowing what to return if the strings did not have what i was looking for. So i had to experiment with an empty string with a space to just an empty string that worked out.

## 8 kyu Are You Playing Banjo?:

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo"
name + " does not play banjo"  

## Process/Learned:

1. There was not much to learn in this codewar. I solved it by first taking a look at the string given from the parameter with the console, then using the method charAt i took the first starting letter and used the ternary operator to determine if the first letter of that name started with a capital R or a lower case r.

2. If it is true, i would return the name plus plays banjo and if not true, it would return name plus concatenating does not play banjo.

##  8 kyu Reverse List Order:

In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples
reverseList([1,2,3,4]) == [4,3,2,1]
reverseList([3,1,5,4]) == [4,5,1,3]

## Process/Learned:

1. I reversed the array by using the reverse method it changes the first and last elements location which reverse the array.

## 7 kyu Blood Moon:

Alan is going to watch the Blood Moon (lunar eclipse) tonight for the first time in his life. But his mother, who is a history teacher, thinks the Blood Moon comes with an evil intent. The ancient Inca people interpreted the deep red coloring as a jaguar attacking and eating the moon. But who believes in Inca myths these days? So, Alan decides to prove to her mom that there is no jaguar. How? Well, only little Alan knows that. For now, he needs a small help from you. Help him solve the following calculations so that he gets enough time to prove it before the eclipse starts.

Screenshot-3
Three semicircles are drawn on AB, AD, and AF. Here CD is perpendicular to AB and EF is perpendicular to AD.

Task
Given the radius of the semicircle ADBCA, find out the area of the lune AGFHA (the shaded area).

## Process/Learned:

1. The process i took for this problem was to multiply the radius by itself so as to get a full circle from the semi circle then divide it by the 4 points given from the shaded square. This gave me the area of the shaded lune.

## 7 kyu 99 Problems, #1: last in list:

Write a function last that accepts a list and returns the last element in the list.

If the list is empty:

In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

In languages that do not have an empty option, just return null

## Process/Learned:

1. The process i solve this problem was to first console.log the values i am working with. After knowing i will be working with arrays, i then think of how to retrieve the last element in the array using bracket notation.

2. Then i use a ternary operator to se if the first element in the array is equal to undefined. If it is, the function would return a null. If not, i would retrieve the last element from the array using bracket notation and return it.

## 7 kyu The Office I - Outed:

Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

## Process/Learned:

1. For this codewars, i had to think of many ways to represent the data in the object in different forms of data. Then i had to change one part of the object, then finally use the data to decide to return a string data of two choices.

2. This first thing i did was to console.log the different forms of data i will use and the data i want to see in the log that represents the previous form of the object before it changed and after it changed.

3. After seeing all the forms i will be utilizing like the object's values and the objects's keys length value, etc.. I then moved to check if i could find the boss in the object.

4. If i did find it, i would double the value for the boss and then turn all those values into an array. I manage to double the value by multiplying the initial value by 2 and setting that new value to the object.

5. Once that was done, reduced the array of values to one integer by adding every element in the array together. Then i divided the amount of keys which represent the amount of people in the meeting to the total amount of happiness values which gave me the overall rating.

6. I used this rating to determine which string value should i return. If the overall value was greater than 5, i would return "Nice Work Cham!". If not, i would return "Get Out Now!".

7. The hardest part of this codewars was to determine the location of the boss's value in the array and comparing it to the value of the boss's value in the original object.

8. The easiest part is reducing the array to one interger.   

## 7 kyu Ultimate Array Reverser:

Given an array of strings, reverse them and their order in such way that their length stays the same as the length of the original inputs.

Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}

## Process/Learned:

1. This problem was not easy to figure out and solve at first glance. I had to used different combination of reverse, join and split plus splice and push.

2. The first thing i did was console.log the given array. Then i went to split, reverse and join each element in the array.

3. I later found that was the wrong path and i had to join, split and reverse the array. This way the whole string as one can be reversed as one so that i can now take chunks of it using splice and the length of each element from the original array.

4. Each chunk i took off with splice, i added to an empty array and lastly i return that array.

## 7 kyu JavaScript Array Filter:

JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]

## Process/Learned:

1. In this problem, i have to figure out how to remove the odd numbers form the given array. So i decided to first take a look at the array by console.log. Then i went ahead and looked up the modulous operator to see how i would create this function that i would feed to the filter method.

2. After understanding that the modulous operator is for remainders, I then created a function that tested for every element in the array if it was divisible by 2 and if the remainder was 0.

3. i then created my filter function that checked every number in the given array and removed any numbers that were not divisible by 2.

4. Then i returned that new array even if it is empty.

## 7 kyu Vowel Count:

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.

## Process/Learned:

1. I solved this problem using a regex to see if the given character is a vowel or not and adding the count by one if it is.

2. This problem was not too hard because i have dealt with strings before and so i knew the process to take to turn the given string into lowercase, then into an array and then using map to look through the new array.

3. The hard part for me was the comparison in order to find wether the given Character in the string is a vowel. Especially when there is not not a given method that i could find that could find the differences between a consonant and a vowel.

4. So after researching and not finding a method to suit me, i looked into regular expression. I knew regular expressions were us to deal with the string data type. i ended up finding a regex that suit my needs and a perfect method to go along with it (.test).

5. After putting the the regex and the test together and comparing it to the given string characters, i found wether each string char is a vowel or not. And if it is a vowel, i added the count by 1. Then finally returning the final value of the count.      

## 7 kyu Disemvowel Trolls:

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

## Proccess/Learned:

1. The process to solve this codewars is very similar to my last one where i had to identify characters in a string.

2. i started the solving process by logging the given string in the console. Then i turned the string into an array, splitting it letter by letter.

3. Then i tried using the splice method which gave me bad results. I would identify the vowels using the test method with a regex, but the splice method would always remove the character after the vowel instead of the vowel instead.

4. So i opted for the replace method where i would replace the vowel with an empty character. This worked well, until i found out i had to look for the uppercase  vowels too.

5. So i added more characters to the regex where it would identify the uppercase vowels and voila, i got the intended answer.  

## 7 kyu Flatten and sort an array:

Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

## Process/Learned:

1. I started this problem by assuming that the array would be full of elements representing arrays. So i then thought of moving the arrays into a new array. And then sort the new array.

2. I first focused on going through the array using the map method. Then I focused on going through each element in the array because i knew each element would be an array. So i further used the map method to go through each element.

3. Then i focused on pushing each element in the array into a new array. This was a surprised for me because i unknowingly solved the problem where i solved the issue of sorting the array of numbers.

4. But i further pushed to sorting the new array by using the sort method. Then returned the sorted array.

## 7 kyu Sexy Primes <3:

Sexy primes are pairs of two primes that are 6 apart. In this kata, your job is to complete the function sexy_prime(x, y) which returns true if x & y are sexy, false otherwise.

Examples:

sexy_prime(5,11)
--> True

sexy_prime(61,67)
--> True

sexy_prime(7,13)
--> True

sexy_prime(5,7)
--> False

sexy_prime(1,7)
--> False
( 1 is not considered prime )
Note: x & y are always positive integers > 0, but they are not always in order of precendence...you can be given either (5,11) or (11,5). Both are equally valid.

## Process/Learned:

1. I solved this problem by first logging the given integers.

2. Then i focused on the main problem by checking if the two integers are 6 integers apart.

3. Then i checked if the numbers are divisible by 2. This will check if the numbers are prime.

4. Lastly i checked all the edge cases i need to get every problem correct such as the numbers do not equal 1 and 21.

## 7 kyu How many arguments:

args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4

## Process/Learned:

1. I learned from this problem that there is a specific method that can be used to count the amount of methods passed into function which is arguments.length.

2. I also learned that there is a method to call the arguments as an object.

## 7 kyu Consecutive letters:

In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

For example:
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True

##Process/Learned:

1. This was one of the hardest codewars i have ever faced where i was also forced to use the brute force method.

2. So the first thing i did when trying to solve this codewars is to console log the inputed string.

3. Then i turned this string into an array using the split and sort method.

4. Then i looked online to see if i could find a resource like the alphabets in order to serve as a comparison for the orders string. Unfortunately, i could not find any good resource and had to create an array that housed the alphabets.

5. I then looped though the ordered string array and used the array i created to see if the characters were exactly equal to the characters in the string array. I would push each bollean value of the comparison result into a new array.  

6. Then i did a round about check of the new array to see if any of the values were false. If there was any false values, then the function would return a false. If it did not have any false values, the function would return a true value.    

## 7 kyu Printer Errors:

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

#Examples:

s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"

## Process/Learned:

1. I solved this problem by first login the given string. Then i turned the string into an array.

2. Then i focused on going through the array using the map method and checking if every character in the string is from a through m. if any of the characters do not match the given criteria, the test method will return false into the new array that is created through the map method.

3. I then stored this new array in a variable which i filtered using the filtered method and took out every false result in the new array.

4. Then i took the length of that array concatenated with the string that includes a slash and concatenated with the length of the given string and returned that result.

## 7 kyu The Office II - Boredom Score:

Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'

## Proccess/Learned:

1. I solved this problem by using the data given to me through the object staff and the data given to me trough the description of the problem that is the boredome score.

2. The first thing i did is log the staff object and create a new object called department that holds the boredom score for each department. I also inputed on of the departments through bracket notation because it had a space in between the characters.

3. Then i went to create a function that took every staff name and gave me their departments. It also takes every department and gives me the score in an array form.

4. Then i added every number in that array into an integer by using the reduce function.

5. Then i did the comparison to find out if that integer if greater than a certain value and returned the appropriate statement.   

## 7 kyu Complementary DNA:

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA"

## Process/Learned:

1. I started this problem by first logging the given string. Then I pondered on what the problem description wanted me to do. After finding out that the objective wanted me to replace each character with it's counter part meaning A for T and C for G and reverse.

2. Then I focused on finding a proper method to replace string characters. I found the replace method and looked into a proper regex to use with this method.

3. I landed on using the period regex formation that matches any character. I used that as the regex and use a fat arrow function to match any given character with the regex.

4. Then I thought I need to create an object that would hold every string match as a key and it's value the counter part. Then I inserted the object to match every string character and ran the function.  

## 7 kyu Get list sum recursively:

Write function sumR which returns the sum of values in a given list. Try no to cheat and provide recursive solution.

## Proess/Learned:

1. I solved this problem by first checking the given input which is an array.

2. Then I focused on the edge cases such as if the array has no value, to return 0 indicating the list is empty.

3. Then i used the reduce method to add every value in the array and return the total to show how many items is in the list.

## 7 kyu Offload your work!:

You are the best freelancer in the city. Everybody knows you, but what they don't know, is that you are actually offloading your work to other freelancers and and you rarely need to do any work. You're living the life!

To make this process easier you need to write a method called workNeeded to figure out how much time you need to contribute to a project.

Giving the amount of time in minutes needed to complete the project and an array of pair values representing other freelancers' time in [Hours, Minutes] format ie. [[2, 33], [3, 44]] calculate how much time you will need to contribute to the project (if at all) and return a string depending on the case.

If we need to contribute time to the project then return "I need to work x hour(s) and y minute(s)"
If we don't have to contribute any time to the project then return "Easy Money!"

## Process/Learned:

1. This problem was pretty complicated for me. The first thing i did to solve this problem was to first find the given input using console log.

2. The second thing I did was to think of a way to sum the given array into one digit value while also converting any hours into minutes so that they can be properly valued. So I used the map method to go through the array. Then I used the reduce method on each element in the array which are arrays themselves. And I converted each first element in the the inner array from hours to minutes by multiplying it by 60. Then i finally reduced the array that had all of the hours into the total amount of freelance hours.

3. I then figured out the total amount of time left to work on the project bu subtracting the total amount of hours by the total amount of freelance hours.

4. Then I find out which statement to return by using the ternary operator. I returned "Easy Money!" if the work hours in minute form is less than or equal to 0. If the work hours are greater than 0, I returned a different string "I need to work (a certain amount of hours) and (a certain amount of minutes)". I calculated the amount of hours to work by using template literal on the whole string. I divided the amount of work hours in minute form by 60 to convert it to hours and then ask the computer if the amount of hours is greater or equal 1. If it is, it would state the amount of hours. If not, it would return 0 hours. I then calculated the amount of minutes left by checking the modulus between the work hours in minute form to 60. That remainder is the amount of minutes left.   

## 7 kyu Even numbers in an array:

Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

## Process/Learned:

1. I solved this problem by first logging the given array and number.

2. Then i got only the even numbers in the array by using the filter method. I checked if each element in the array is divisible by 2 with a remainder of 0. If it is, it can be added to the new array which is held in the variable result.

3. Then i got the last numbers by using the slice method on the new array that is result. But to get the correct amount of numbers i want to keep i had to subtract the number of numbers i want to keep but the total amount of numbers in the array using the length method on the array.   

## 7 kyu Rotate for a Max:

Let us begin with an example:

Take a number: 56789. Rotate left, you get 67895.

Keep the first digit in place and rotate left the other digits: 68957.

Keep the first two digits in place and rotate the other ones: 68579.

Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.

You have the following sequence of numbers:

56789 -> 67895 -> 68957 -> 68579 -> 68597

and you must return the greatest: 68957.

Task
Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.

So max_rot (or maxRot or ... depending on the language) is such as:

max_rot(56789) should return 68957

max_rot(38458215) should return 85821534

## Process/Learned:

1. I started this problem by first loggin in the given number.

2. Then i changed the number into a string value and into an array using the toSring and split method.

3. Then i created some variables for an empty array, another one that holds the number in the string array format, another one that will hold the number to be shifted which equals 0 initially and lastly a variable to hold the max number.

4. Then i created a for loop that will move through the array of string numbers. While this for loop is happening i held the first number into one of my variables called pushing. I did this by using the splice method on the array of string numbers. The splice method removes the one at the index value of i which starts at 0. I made sure i get the value of the array being given by placing square a bracket with the 0 index inside. This grabs the value of the array that is returned from the splice method.

5. Then I inserted that number using the same splice method and made sure to insert it at the last index of the string array.

6. Then I pushed that whole array of string numbers into the empty array. But not before converting it back into a number with the join and Number method.

7. Then lastly after the for loop repeats and finishes the loop, I get all the numbers and placed them into the Math.max method using the spread syntax, and also place the original number with it. This makes sure i get all my edge cases and get me the highest number which is then returned and ends the function.

8. I learned from this problem that having good architecture is crucial in a function like this one. If i had placed the max method before the for loop, i would get an error of negative infinity. This makes sense because the for loop has not finished pushing all the numbers into the empty array, therefor there are not any numbers to see what is greater. I also learned how to use the splice method a bit more wisely by using its insert and remove functions and knowing which positions i want to pull and place. Overall, great problem to solve.     

## 7 kyu Password Hashes:

When you sign up for an account somewhere, some websites do not actually store your password in their databases. Instead, they will transform your password into something else using a cryptographic hashing algorithm.

After the password is transformed, it is then called a password hash. Whenever you try to login, the website will transform the password you tried using the same hashing algorithm and simply see if the password hashes are the same.

Create the function that converts a given string into an md5 hash. The return value should be encoded in hexadecimal.

You will need to use the NodeJS Crypto Module or libcrypto for the C and NASM versions.

###Code Examples

passHash('password')
  //--> '5f4dcc3b5aa765d61d8327deb882cf99'

passHash('abc123')
  //--> 'e99a18c428cb38d5f260853678922e03'
If you want to externally test a string, look at this website.

If you are completely lost, I recommend you check out my previous Introduction to NodeJS.

As a side note, md5 can be exploited, so never use it for anything secure. The reason I used it in this kata is simply because it is a very common hashing algorithm and many people will recognize the name.

## Process/Learned:

1. I solved this problem by doing some extensive research into node modules. Reading about crypto and finding the methods to use to get the result I am looking for.

2. So to solve this problem i focused on finding out how to apply the crypto module to my code so i can use the methods. So i used the require method so i can import the module. I made sure this was stored in a variable that is accessible globally so that both functions can have access to the module.  

3. Then i used the create hash method and set it to md5 so that the string can be hashed.

4. Then i used the update method so i can set the string as the value that will be hashed.

5. Finally i used the digest method to have the string be encoded in hexadecimal .

## 7 kyu Node.js Intro:

JavaScript (and CoffeeScript by extension) is a language that is heavily dependent on a run-time environment. While most people learn JS in a browser environment, there are other environemnts that run outside of a browser. Codewars runs your code in a *Node.js* environment.

This kata is an attempt to introduce the NodeJS environment.

Environment Differences
The runtime environment gives your code the ability to interact with software outside of the language itself. For example, a browser environment has several built-ins that let you interact with a webpage. You can use functions like getElementById or XMLHttpRequest.

Node.js, however, cannot use those browser-specific built-ins (go ahead, try). Node.js is an environment for javascript that is meant to run on your computer (server-side). So while you lose the ability to work with browser built-ins, you gain access to NodeJS-specific code.

Kata
We are going to replicate the kata Base64 Encoding, but instead of creating our own encoding / decoding functions, we will use NodeJS' Buffer module to do it for us.

Create the function String.prototype.toBase64 that encodes a string in Base64. Also create the function String.prototype.fromBase64 that decodes a Base64 string into utf8.

Examples
// should return 'dGhpcyBpcyBhIHN0cmluZyEh'
'this is a string!!'.toBase64();

// should return 'this is a string!!'
'dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64();
Tips
To use a NodeJS module, you need to require it into your code. For example, if I wanted to use the util module, I could write

//require the 'util' module into your code
var util = require('util')
console.log(util.isRegExp(/hi/))
The NodeJS built-in function require knows exactly how to find the module, so no extra work is needed. After you have required a module into your code, you can use any of the methods / properties for it.

The NodeJS documentation is helpful, so I suggest you look at that. If you plan on working with NodeJS at all in the future, it is beneficial to know what features it has built-in.

## Process/Learned:

1. This function was another dive into Node and it's modules. I looked up the buffer module and how to use it by writing the name as a string in the require method.

2. So for this function, i had to turn a string from utf8 to base64. Then from base64 to utf8. The first thing that struct me about doing this kind of function is that i could not find out what to console.log from a first glance. I had to learn of the (this) method for me to know how to pinpoint the string in the string.prototype.toBase64 object and same for the string.prototype.fromBase64 object. The this method allowed me to target the string and use if in the methods.   

3. So for the first function expression, i logged the string in the console using the this method. Then i stored string after it had been changed by the American Standard Code for Information Interchange into a numeric code.

4. Then i set the variable to the toString method and set the type of string to base64. This encodes the string in the base64 format.

5. For the second function, I followed a similar pattern where i logged the string in the console.

6. Then i changed the given string to a base64 format using the Buffer.from method.

7. Then i changed to to a string with the toString method in the utf8 format. This changes both string the expected output and ends the function.

## 6 kyu Roman Numerals Decoder:

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

## Process/Learned:

1. I solved this problem by first logging the given string in the console. Then i created an object that holds the roman numeral characters as the keys and the value of those characters as the value.

2. Then i created a for loop that went through the string to it's full length. The first conditional is if the letter preceding the next letter has a lower value than the next letter, then subtract the values with the bigger value being subtracted by the lower value and added to the total.

3. Else, the numbers will be added to the total normally from left to right and then returned.  

## 6 kyu Roman Numerals Encoder:

Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

## Proccess/Learned:

1. I learned to solve this problem by imagining how i could get each value out of each character and character combination.

2. So i first created an array of objects where each object contains a roman numeral/numeral combination as a key and a number representing the value of that roman numeral. This array is in order from 1000 to 1.

3. Then i created two other variables where one of the variable is a 0 and the other is an empty string.

4. I then looped through the array of objects and created a for in loop in the for loop to deal with each object in the array. I grabbed the keys in the for loop.

5. I then used a while to set up a condition that would repeat a statement until the condition is false. So for the condition i made it so that as long as the value variable plus the value of on of the objects is less than of the given number.

6. When those conditions meet, the while loop will iterate. The statement inside the while loop will run, where the value variable will be added to the value of the the roman numeral that is less then the current number.

7. I also add the roman numeral key to the romanStr variable which concatenates all the characters into one string. This keeps repeating until the value variable added to the roman numeral value is the same amount as the given number.

8. Then lastly, i return the return the romanStr which represent the number's equivalent in Roman numerals.    

## 8 kyu My head is at the wrong end!:

You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!

## Process/Learned:

1. I was surprised to learn that each array is not unique after doing some research. After sensing a pattern, I noticed that every array presented is a reversed form of the corrected version. And to solve it, i simply needed to reversed it again.  

## 8 kyu 101 Dalmatians - squash the bugs, not the dogs!:

Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog.

## Process/Learned:

1. The objective of this challenge was to fix the mistakes in this given function.

2. So to start, i went over the way the function was written and noticed several obvious mistakes such as the function name, the fucntion brackets, and how the ternary if else operator is written.

3. Next i noticed some hidden mistakes such as the given string that is supposed to be returned and the amount of dogs that should return the 101 Dalmatians.

  - Overall, it was a fun challenge.

## 8 kyu Grasshopper - Check for factor:

Check for Factor
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

Information
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because:

2 * 3 = 6
You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
In Javascript and C# you can use % to check for a remainder
For example 2 is not a factor of 7 because:

7 % 2 = 1

## Process/Learned:

1. Checking for the factor was easy where i looked for the remainder of diving the base number by the factor number and seeing if that number is equal to 0.

2. If true, than that number is a factor of the base, else it is false. And i return that result.

## 8 kyu A Needle in the Haystack:

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5"

## Process/Learned:

1. So the objective of this challenge is to look through an array and look for a string "needle".

2. I was able to find it by using the method indexOf on the string needle on the array that contains it.

3. Then I used the positioning of the index and returned it in the string "found the needle at position 5" using template literal.  

## 7 kyu Love vs friendship:

If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.

## Process/Learned:

1. This function asked me to be able to assign a number to each alphabetical symbol and use that information to be able to sum up a word.

2. I started this function on the assumption i would have to create the object manualy and then loop through the object to find the value for each aphabetical symbol.

3. But an idea came to me that i should create this object at run with its properties and values.

4. So after some research, I found that the to string method can convert numbers to an alphabetical symbol.

5. so i use this method to map the whole alphabet from a to z with the values of 1 to 26.

6. Then I took the string I am given and turned it into an array of individual letters using the split method. Converted that array to numbers from the object I created using the bracket notation and the map method to loop through that array of letters. And summed up those numbers using the reduced method which i then returned.  

## 7 kyu Shift Left:

You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

For Example:

By applying a move to the string "where", the result is the string "here".
By applying a move to the string "a", the result is an empty string "".
Implement a function that calculates the minimum number of moves that should be performed to make the given strings equal.

Notes
Both strings consist of lowercase latin letters.
If the string is already empty, you cannot perform any more delete operations.

## Process/Learned:

1. 

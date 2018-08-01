
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

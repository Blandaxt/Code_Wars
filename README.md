
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

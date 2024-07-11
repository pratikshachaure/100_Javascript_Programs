 // 009. Write a program to accept a number from user and print it’s square & cube in js
 const prompt = require('prompt-sync')();   
 let input_number=Number(prompt("Enter your number :- ")); 
 let square=input_number*input_number;
 let cube=input_number*input_number*input_number;
 console.log("Square of given number is :- ",square);
 console.log("Cube of given number is :- ",cube);
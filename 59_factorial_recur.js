
const prompt = require('prompt-sync')();  

 // 065. Write a program to print factorial of a given number using recursive function in js
 let number=Number(prompt("Enter the number :- "));

 function find_Factorial(number)
 {

     let fact;
     if(number==1)
 {
     return 1;
 }
 else 
 {
 return number * find_Factorial(number - 1); 
     
 }
 }
 

 console.log("Factorial is :- ",find_Factorial(number))

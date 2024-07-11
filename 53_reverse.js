// 058. Write a program to accept a number from user and print that number in words but in reverse order in  js
const prompt = require('prompt-sync')();  

    
let number=398;
let reverse=number.toString().split('').reverse().join('')
console.log("Reverse of given number is :- ",reverse)


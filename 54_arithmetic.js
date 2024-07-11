// 059. Write a Program to accept two numbers and a operator (+, -, *, / from user and complete that particular operation only in js

const prompt = require('prompt-sync')();  

let first_Input=Number(prompt("Enter the fist number :- "));
let second_Input=Number(prompt("Enter second number :- "));
let addition=first_Input+second_Input;
console.log("Addition is :- ",addition)


let substraction=first_Input-second_Input;
console.log("substraction is :- ",substraction);


let multiPlication=first_Input*second_Input;
console.log("multiPlication is :- ",multiPlication)


let division=first_Input/second_Input;
console.log("division is :- ",division)



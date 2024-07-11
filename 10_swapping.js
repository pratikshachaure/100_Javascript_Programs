const prompt = require('prompt-sync')();  


// 010. Write a program to accept two values a & b and interchange their values 

let first_Input=Number(prompt("Enter your first number :- "));
let second_Input=Number(prompt("Enter your second Number :- "));
let third_var=first_Input;
first_Input=second_Input;
second_Input=third_var;
console.log("first input is :- ",first_Input);
console.log("second input : - ",second_Input)
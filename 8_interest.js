const prompt = require('prompt-sync')();  
 
 // 008. Write a program to print simple interest SI = (PNR)/100 in C language

let amount=prompt("Enter your Principle Amount :- ");
let rate=prompt("Enter the rate :- ");
let time_period=prompt("Enter you time period :- ");
let interest=amount*rate*time_period;

console.log("Total inteest is :- ",interest);
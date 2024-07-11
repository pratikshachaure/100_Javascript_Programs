const prompt = require('prompt-sync')();  
// 011. Write a program to accept roll no and marks of 3 subjects of a student, Calculate total of 3 subjects and average 
let roll_Number=Number(prompt("Enter the student Roll number :- "));
let marathi=Number(prompt("Enter the marks of marathi subject:- "));
let english=Number(prompt("Enter the marks of english subject:- "));
let history=Number(prompt("Enter the marks of history subject:- "));

let total_Marks=marathi+english+history;
console.log(total_Marks)
let findAverage=total_Marks/3; 
console.log("Average is :- ",findAverage);
const prompt = require('prompt-sync')();  

// 007. Write a program to print area of a triangle A(Triangle)= 0.5 * B * H in js 
let base=Number(prompt("Enter your base :- "));
let height=Number(prompt("Enter you height:- ")); 
let area_of_Triangle=0.5*base*height;
console.log(`${area_of_Triangle}`);
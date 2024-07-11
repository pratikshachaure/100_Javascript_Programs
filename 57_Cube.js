const prompt = require('prompt-sync')();  
// 062. Write a program to calculate square and cube of a given number


let number=Number(prompt("Enter the number :- "));

let findSquare=number*number;
let findCube=number*number*number;

console.log("Square is : - ",findSquare);
console.log("Cube is : ",findCube)
const prompt = require('prompt-sync')();  
// 025. Write a Program to print numbers 1 to n using while loop in C language
 
let number=Number(prompt("Enter your nth number :- "));
for(let i=1;i<=number;i++)
{
    console.log(i)
}
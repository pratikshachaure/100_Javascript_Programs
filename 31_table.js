const prompt = require('prompt-sync')();  
// / 032. Write a program to print table of a given number n in C language
let number=Number(prompt("Enter your number :- "))
for(let i=1;i<=10;i++)
{
    let table=number*i;
    console.log(table)
}
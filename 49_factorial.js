const prompt = require('prompt-sync')();  
// 052. Write a program to accept a number n from user and Add n terms of the series in js
let num=Number(prompt("Enter your number :- "));
let fact=1;
for(let i=1;i<=num;i++)
{
console.log("Factorial of ",i)
fact=1;
for(let j=1;j<=i;j++)
{
    fact=fact*j;
}

console.log(fact)
}
const prompt = require('prompt-sync')();  



// 049. Write a program to accept a number and print prime numbers between 2 and n in js
let count=0;
let number=prompt("Enter your number")
console.log("Prime number are :- <br>")

for(let i=2;i<=number;i++)
{
count=0;

for(let j=0;j<=i;j++)
{
if(i%j==0)
{
count++;
}
}
if(count==2)
{
console.log(i)
}
}
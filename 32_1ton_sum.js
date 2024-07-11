const prompt = require('prompt-sync')();  
// 033. Write a program to print sum of given first n numbers in js
let number=Number(prompt("Enter your number :- "))
let sum=0;
for(let i=1;i<=number;i++)
{
let newnum=Number(prompt("Enter number for add :-"));
sum=sum+newnum;
}
console.log("Total sum is ",sum) 
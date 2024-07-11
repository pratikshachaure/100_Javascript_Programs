const prompt = require('prompt-sync')();  
 // 030. Write a Program to accept a number and print sum of it’s digits in js

 let number=Number(prompt("Enter your number :- "))
let rem=0,sum=0;
while(number!=0)
{
     rem=number%10;
     sum=sum+rem;
     number=parseInt(number/10);
}
console.log("sum is :- ",sum);

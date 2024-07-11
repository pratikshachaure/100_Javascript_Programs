const prompt = require('prompt-sync')();  
// 028. Write a Program to print first n odd numbers in C language

let number=Number(prompt("Enter your number :- "))

for(let i=1;i<=number;i++)
{
    if(i%2!=0)
{
    console.log(i)
}
}
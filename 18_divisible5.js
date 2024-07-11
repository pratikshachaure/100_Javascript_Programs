const prompt = require('prompt-sync')();  
// / 018. Write a program to accept a number from user and print if it is divisible by 5 in js

let number=Number(prompt("Enter your number :- "));
if(number%5==0)

{
    console.log("Number is divisible 5 by ");
}
else{
    console.log("Number is Not divisible by 5 ");
}
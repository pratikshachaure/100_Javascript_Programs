const prompt = require('prompt-sync')();  
// 017. Write a program to accept a number from user and print if it is even or odd in js

let number=Number(prompt("Enter your number :- "));
if(number%2==0)

{
    console.log("Number is Even ");
}
else{
    console.log("Number is odd ");
}
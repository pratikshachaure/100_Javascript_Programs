
const prompt = require('prompt-sync')();  

// Write a program to accept a number from user and print if it is divisible by 7 in js
    
    let number=Number(prompt("Enter your number :- "));
    if(number%7==0)
    
    {
        console.log("Number is divisible  by 7 ");
    }
    else{
        console.log("Number is Not divisible 7 ");
    }
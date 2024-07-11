const prompt = require('prompt-sync')();  
// 026. Write a Program to print numbers n to 1 using Do While loop in js
    let number=Number(prompt("Enter your number :- "))
    let i=1;
    do {
        console.log(i);
        i++;
    }
    
    while (i <= number);
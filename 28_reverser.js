const prompt = require('prompt-sync')();  
 // 029. Write a Program to accept a number and print the number in reverse order. E.g. if 1324 is the number then the output will be 4231 in js

 let number=Number(prompt("Enter your number :- "))
 let rem=0,reverse=0;
 while(number!=0)
 {
      rem=number%10;
      reverse=reverse*10+rem;
      number=parseInt(number/10);
 }
 console.log("Reverse is :- ",reverse);
 
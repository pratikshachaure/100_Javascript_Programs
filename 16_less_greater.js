const prompt = require('prompt-sync')();  
 // 016. Write a program to accept a number and check if it is >10, <10 or =10 in js
 let number=Number(prompt("Enter your number :- "));
 if(number>10)
{
 console.log("Number is greter than 10 ");
}
else if(number<10)
{
 console.log("Number is less than 10");
}
else{
 console.log("Number is 10");
}
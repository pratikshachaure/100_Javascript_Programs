const prompt = require('prompt-sync')();  
 // 050. Write a program to accept a number and print fibonacci series upto that level in js

 let number=prompt("Enter the number ")
 let first=0,secod=1,third=0;
 for(let i=0;i<=number;i++)
{

 console.log(first)
 third=first+secod;
 first=secod;
 secod=third; 

}
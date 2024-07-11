 // 069. Write a program to accept a number n from user and print fibbonacci series up to nth level using arrays in js
 const prompt = require('prompt-sync')();  

 let elementslength=prompt("how many numbers we want to add for fibonacci series : - ");
 let arr=[];
 let first=0,second=1,third=0;
 for(let i=0;i<elementslength;i++)
 { 
 arr.push(first);
 third=first+second;
 first=second;
 second=third; 
 }
 console.log("Fibonacci Series in the array :",arr)
 
 
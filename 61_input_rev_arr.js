const prompt = require('prompt-sync')();  

// / 067. Write a program to accept a number n from user and then accept n array elements from user and reprint them in reverse order of inputs in js
let elementslength=prompt("how many numbers we want to add in the arra: - ");
let arr=[];
for(let i=0;i<elementslength;i++)
{
    
let elements=prompt("Enter your arry elemet ");

arr.push(elements);

}

console.log( "Original Array is :- ",arr)

console.log( "Reverse Array is :- ",arr.reverse())
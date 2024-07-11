
const prompt = require('prompt-sync')();  

// 066. Write a program to accept a number n from user and then accept n array elements from user and reprint them
let elementslength=prompt("how many numbers we want to add in the arra: - ");
let arr=[];
for(let i=0;i<elementslength;i++)
{
    
let elements=prompt("Enter your arry elemet ");

arr.push(elements);

}
console.log(arr)
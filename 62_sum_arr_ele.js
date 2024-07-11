// 068. Write a program to accept a number n from user and then accept n array elements from user and print addition of those n array elements
const prompt = require('prompt-sync')();  

let elementslength=prompt("how many numbers we want to add in the arra: - ");
let arr=[];
let sum=0;
for(let i=0;i<elementslength;i++)
{
    
let elements=Number(prompt("Enter your arry elemet "));

arr.push(elements);

  sum=sum+arr[i];

}
console.log("Sume of array element is :",sum)

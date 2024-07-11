

// 074. Write a program to accept two M x N matrices and add them in js
const prompt = require('prompt-sync')();  

let rowLength = Number(prompt("Enter the row length: "));
let colLength = Number(prompt("Enter the column length: ")); 
 let arr=[];
 let someofAllelement=0;

 for(let i=0;i<rowLength;i++)
 {
    arr.push([])
    for(let j=0;j<colLength;j++)
 { 
     arr[i][j]=Number(prompt("Enter the elements of array :- ")); 
 }
 }
let sum=0;
  for(let i=0;i<rowLength;i++)
  {
    let newarr=[];
    let sum=0;
    for(let j=0;j<arr[i].length;j++)
  { 
     newarr.push(arr[i][j]);
     sum += arr[i][j];
  }
  console.log(newarr.join('')); 
  someofAllelement=someofAllelement+sum;
 
   
  } 
  console.log("Some of all elements in the matrix is :- ",someofAllelement)

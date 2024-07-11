
const prompt = require('prompt-sync')();  

// 076. Write a program to accept a M x N matrix and print addition of diagonal elements of that matrix in C Javascript

let rowLength = Number(prompt("Enter the row length: "));
let colLength = Number(prompt("Enter the column length: ")); 
 let arr=[];

 for(let i=0;i<rowLength;i++)
 {
    arr.push([])
    for(let j=0;j<colLength;j++)
 { 
     arr[i][j]=Number(prompt("Enter the elements of array :- ")); 
 }
 }
let someofAllelement=0;
  for(let i=0;i<rowLength;i++)
  {
    let newarr=[];
    let sum=0;
    for(let j=0;j<rowLength;j++)
  {
     if(j<=i)
     {
        newarr.push(arr[i][j]);
        sum += arr[i][j];
     }
     else{
        console.log(" ")
     }
    
  }
  someofAllelement=someofAllelement+sum;
  console.log(newarr.join('')); 
    
  } 
  console.log( "Sum is = ",someofAllelement)
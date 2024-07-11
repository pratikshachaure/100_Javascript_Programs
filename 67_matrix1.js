 // 073. Write a program to accept a mXn matrix and reprint it in matrix form in073. Write a program to accept a mXn matrix and reprint it in matrix form in
const prompt = require('prompt-sync')();  
 
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
 
   for(let i=0;i<rowLength;i++)
   {
     let newarr=[];
     let sum=0;
     for(let j=0;j<rowLength;j++)
   {
      newarr.push(arr[i][j])
     
   }
   console.log(newarr.join('')); 
   
    
   } 
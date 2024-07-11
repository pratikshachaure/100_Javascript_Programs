   // 072. Write a program to accept a number n from user and then accept n array elements from user, print these array elements in ascending and descending order in js


const prompt = require('prompt-sync')();  

   let elementslength=prompt("how many numbers we want to add in the arra: - ");
   let arr=[];
   for(let i=0;i<elementslength;i++)
   {
       
   let elements=Number(prompt("Enter your array elemet ")); 
   arr.push(elements); 
   }
   
     let newarr=arr.sort((a,b)=>b-a)
     console.log("Ascending Order is :- ",newarr)
     console.log("Descending Order is :- ",newarr.reverse())
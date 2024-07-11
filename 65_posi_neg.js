 // 071. Write a program to accept a number n from user and then accept n array elements from user, print positive & Negative numbers separately in 
 const prompt = require('prompt-sync')();  


 let elementslength=prompt("how many numbers we want to add in the arra: - ");
 let arr=[];
 for(let i=0;i<elementslength;i++)
 {
     
 let elements=Number(prompt("Enter your array elemet "));
 
 arr.push(elements);
 
 }
 
 for(let i=0;i<arr.length;i++)
 {
 
 
     if(arr[i]>0){
         console.log( "Positive Numbers are :- ",arr[i])
     }
     else{
 
         console.log("Negative numbers are ",arr[i])
     }
 }
 
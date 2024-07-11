
const prompt = require('prompt-sync')();  

// 031. Write a program to accept a number from user and check if it is Armstrong number or not i.e. 153 = 1^3 + 5^3 + 3^3 = 153 in js 
let number=Number(prompt("Enter your number :- "))
let rem=0,sum=0,org;
org=number;
while(number!=0)
{
     rem=number%10;
     sum=sum+rem*rem*rem;
     number=parseInt(number/10);
}
 if(sum==org)
 {
    console.log("Number is armstrong ",org);
 }
 else{ 
    console.log("Number is Not armstrong ",org); 
 } 

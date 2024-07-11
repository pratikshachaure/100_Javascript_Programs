
const prompt = require('prompt-sync')();  

let number=Number(prompt("Enter the number how many adds numbers: - "));
let sum=0;
for(let i=1;i<=number;i++)
{
    let num=Number(prompt("Enter your number : "));
    sum=sum+num;
}

let average=sum/number;
console.log("Average is : - ",average)

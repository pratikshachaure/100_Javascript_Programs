const prompt =require('prompt-sync')();
let number=Number(prompt("Enter the number :- "));
console.log("Factors of given Number:- ");
for(let i=1;i<=number;i++)
{
    if(number%i==0)
    {

        console.log(i);
    }
}
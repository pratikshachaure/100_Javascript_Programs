const prompt = require('prompt-sync')();  
// 024. Write a Program to accept user’s marital status, gender and age to check if he/she is eligible for marriage or not.

let marital_status=String(prompt(("Enter your marital status marri or not  :-")));
let gender=String(prompt("Enter your gender "));
let age=Number(prompt("Enter your age :-"));
if(marital_status.toLowerCase()=="married")
{
if(gender.toLocaleLowerCase()=="female")
{
if(age>=18)
{
console.log("You are eligibel for marriage ");
}
else{
console.log("You are not eligible for marriage ")
}
}

else if(gender.toLocaleLowerCase()=="male")
{
if(age>=21)
{
console.log("You are eligibel for marriage ");
}
else{
console.log("You are not eligible for marriage ")
}
}
}
{

} 
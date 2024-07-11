const prompt = require('prompt-sync')();  
// 020. Write a program to accept two numbers from user and compare them in js

let first_Input=Number(prompt("Enter your first Number :- "));
let second_Input=Number(prompt("Enter your second Number :- "));
if(first_Input>second_Input)
{

console.log("First Number is greater than second number ",first_Input);
}
else if (second_Input>first_Input){
console.log("Second Number is greater than first number ",second_Input)
}
else{
console.log("Both numbers are equal")
}
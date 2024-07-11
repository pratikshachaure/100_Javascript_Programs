const prompt = require('prompt-sync')();  
// 063. Write a program to accept two numbers from user and swap their values using call by reference method in js


let first_Input = Number(prompt("Enter the fist number :- "));
let second_Input = Number(prompt("Enter second number :- "));


function swapping(first_Input,second_Input)
{
    let third_var=second_Input;
    second_Input=first_Input;
    first_Input=third_var;
    console.log("Value of first number is :- ",first_Input);
    console.log("Value of second number is :- ",second_Input);
    

}

swapping(first_Input,second_Input)
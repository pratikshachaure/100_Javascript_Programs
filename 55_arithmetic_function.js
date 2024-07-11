const prompt = require('prompt-sync')();  


// 060. Write a program to accept two numbers from user and print it’s addition,subtraction,multiplication,division using different functions 
let first_Input = Number(prompt("Enter the fist number :- "));
let second_Input = Number(prompt("Enter second number :- "));


function addition() {
    let addition = first_Input + second_Input;
    console.log("Addition is :- ", addition)


}

function substraction() {
    let substraction = first_Input - second_Input;
    console.log("substraction is :- ", substraction);
}

function multiPlication() {
    let multiPlication = first_Input * second_Input;
    console.log("multiPlication is :- ", multiPlication)


}

function division() {


    let division = first_Input / second_Input;
    console.log("division is :- ", division)

}


addition()
substraction()
multiPlication()
division()
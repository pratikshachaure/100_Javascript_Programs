const prompt = require('prompt-sync')();  


// 021. Write a program to accept three numbers from user and print them in ascending and descending order in

let first_Input=Number(prompt("Enter the first number :- "));
    let second_Input=Number(prompt("Enter the second number :-"));
    let third_Input=Number(prompt("Enter the second number :-"));
     
    let arr=[];
    arr.push(first_Input);
    arr.push(second_Input);
    arr.push(third_Input);
    console.log( "Ascending Order is :- ",arr.sort())
    console.log( "Descending Order is :- ",arr.sort().reverse())
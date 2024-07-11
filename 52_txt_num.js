// / 057. Write a program to accept value interger from user and print that integer in words in js

const prompt = require('prompt-sync')();  

let number=398;
let reverse=number.toString().split('').reverse().join('');
 

let rem=0,org=number;

while(reverse!=0)
{

    rem=reverse%10;
    reverse=parseInt(reverse/10);
    // console.log(rem)

    switch(rem){
        case 0: 
        console.log("Zero ");
        break;
        
        case 1:console.log("One ")
        break;

        case 2:console.log("Two ");
        break;
        case 3:console.log("Three ");
        break;
        case 4: console.log("Four ");
        break;

        case 5: console.log("Five ");
        break;

        case 6:console.log("Six");
        break;

     case 7 : console.log("Seven ");break;
    case 8 : console.log("Eigth ");break;
    case 9 : console.log("Nine ");break;
    }
}
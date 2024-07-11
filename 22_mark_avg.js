const prompt = require('prompt-sync')();  



// 023. Write a program to accept roll number ,and marks for three subjects, print total marks and average, also print grade by considering following conditions

let first_Input=Number(prompt("Enter the first number :- "));
let second_Input=Number(prompt("Enter the second number :-"));
let third_Input=Number(prompt("Enter the second number :-"));
 

let total_Marks=first_Input+second_Input+third_Input;
console.log("total Marks is = ",total_Marks);

let Average=total_Marks/3.0;
console.log("Average is :- ",Average)
if(Average>=90)
{

console.log("Passed with Grade A");
}
else if(Average>=70)
{
console.log("Passed with Grade B");

}
else if (Average>=40)
{
console.log("Passed with Grade C");

}
else if (Average>=35)
{
console.log("Passed with Grade D")
}
else {
console.log("You are Fail keep try..")
}

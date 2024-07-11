const prompt = require('prompt-sync')();  
let number=Number(prompt("Enter your number :- "));
if(number>0)
{
console.log("Number is positive");
}
else if (number<0){
console.log("Number is Negative ");
}
else{
console.log("Number is zero ");
}
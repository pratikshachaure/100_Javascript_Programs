const prompt=require('prompt-sync')();
let number=Number(prompt("Enter the number :- "));
let first_term=0,second_term=1,third_term=0,flag=0;

for(let i=0;i<=number;i++)
{
    third_term=first_term+second_term;
    first_term=second_term;
    second_term=third_term;
    if(number==first_term)
    {
        flag=1;
    }
}
if(flag==1)

    {
        console.log("The number is present in fibonacci series ");
    }
    else{
        console.log("The number is not present in fibonacci series ")
    }
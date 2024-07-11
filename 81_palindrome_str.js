// 094. Write a program to check if the given string is palindrome or not
    
let string="nayan";
let reverse=string.split('').reverse().join('')
 
if(reverse==string)
{
    console.log("String is palindrome ");
}
else{
    console.log("String is not palindrome ")
}

// / 051. Write a program to print digits, alphabets in capital and lower case in js

for(let i=48;i<=121;i++)
{

    if(i>=48 && i<=57)
{

    if(i==48){
        console.log("Digits  are  1 to 10: ")
    }

let num=String.fromCharCode(i)
console.log(num)
}

else if( i>=65 &&i<=90)
{
     if(i==65){
        console.log("UpperCase  characters are : ")
    }
    let upperCasechar=String.fromCharCode(i);
    console.log(upperCasechar)
}

else if (i>=97 && i<=122)
{

    if(i==97){
        console.log("Lowercase characters are ::")
    }
    let lowercaseCharacter=String.fromCharCode(i);
    console.log(lowercaseCharacter)
}
}

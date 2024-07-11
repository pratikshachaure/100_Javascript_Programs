// 082. Write a program to accept a string and print no. of aphlabets, digits, special symbols present in it in 
let charCount=0;
let special_symbol_count=0;
let digits_count=0;

let string=" A Hellow 12 A for Apple @  () gmail.com #programming 108";
for(let i=0;i<string.length;i++)
{
    let characters=string.charCodeAt(i); 

    if(characters>=33 && characters<=47)
{
special_symbol_count++;

}
else if(characters>=48 && characters<=57)
{
    digits_count++;
}
else if(characters>=65 && characters<=122)
{
    charCount++
}
}

console.log("Total characters present in the string:-",charCount);
console.log("Total special symbols present in the string:-",special_symbol_count);
console.log("Total Digits present in the string:-",digits_count);


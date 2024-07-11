
// 081. Print string in reverse,its length,in uppercase,lowercase and copy into another string in js

let stringFor_Print="Helllow to string ";
console.log(stringFor_Print);

let stringReverse="I am reverse string";
let resultOfrevere=stringReverse.split('').reverse().join("")
console.log(resultOfrevere);

let uppercaseString="learn how to do uppercase string in js";
let resultUppercase=uppercaseString.toUpperCase()
console.log(resultUppercase)

let lowercase="Learn How To Do Lowercase String in js";
let resultLowercase=lowercase.toLowerCase();
console.log(resultLowercase)


let copystring="Hellow to Now i want to go now  in another variable";
let copy=copystring;
console.log(copy);
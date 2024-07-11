const prompt=require('prompt-sync')();


let number=Number(prompt("Enter the length :- "));

let arr=[];

for(let i=0;i<number;i++)
{

    let element=Number(prompt("Ente the elements :- "));
    arr.push(element)
}
console.log("Array = "+arr)

let createSet=new Set(arr);
console.log("Unique elements are :- ",createSet)
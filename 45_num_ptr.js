// 046. Write a program to print following outputs in 
// 1
// 11
// 121
// 1231
// 12341
// 123451

  
for(let i=1;i<=5;i++)
{
    let row=" "
    for(let j=1;j<=i;j++)
{
    if(i==j)
    {
        row+="1"
    }
    else{
        row+=j;
    }
}
 console.log(row)
}
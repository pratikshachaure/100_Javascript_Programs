let arr=[1,2,3,5,7,13,12,17];
let count=0;

for(let i=1;i<=arr.length;i++)
{
    count=0;
     for(let j=1;j<=arr[i];j++)
     {
        if(arr[i]%j==0)
        {
            count++;
        }
     }
     if(count==2)
     {
        console.log(arr[i])
     }
}
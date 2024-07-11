 // 055. Write a program to print following output 

// ******************************* 
// *                             *
// *                             *  
// *                             *
// *******************************


for(let i=1;i<=5;i++)
    {
        let row=" "
        for(let j=1;j<=10;j++)
    {
       if(j==1||i==1||i==5||j==10)
       {
        row+="*"
         
       }
       else{
         row+=" "
       }
    }
    
    console.log(row)
    }
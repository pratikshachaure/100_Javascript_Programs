 // 40. Write a program to print following outputs in js
    
//   * * * * * * * * *
//     * * * * * * *
//       * * * * *
//         * * *
//           *
    
for(let i=5;i>=1;i--)
    {
        let row=" ";
    
        for(let j=5;j>=i;j--)
    {
        
    
       row+=" ";
     
    }
    
    for(let k=1;k<=i*2-1;k++)
    {
       row+="*"
    }
    
     console.log(row)
    }
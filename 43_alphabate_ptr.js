  // 044. Write a program to print following outputs in js

        // A
        // BBB
        // CCCCC
        // DDDDDDD

        for(let i=65;i<=69;i++)
            {
                let row=" "
            
                for(let j=69;j>=i;j--)
            {
                
            
                row+=""
             
            }
            
            for(let k=65;k<=i;k++)
            {
                 let characters=String.fromCharCode(i);
                  row+=characters;
            }
            
            console.log(row)
            }
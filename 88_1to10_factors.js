     for(let i=1;i<=10;i++)
     {
        console.log("Factors of ",i);
        for(let j=1;j<=i;j++)
        {
            if(i%j==0)
            {
                console.log(j);
            }
        }
     }
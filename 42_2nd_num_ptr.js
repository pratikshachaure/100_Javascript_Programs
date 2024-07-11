 // 043. Write a program to print following outputs in js

        // 1
        // 22
        // 333
        // 4444

        for (let i = 1; i <= 4; i++) {
            let row=""
            for (let j = 1; j <= i; j++) {
                 row+=i;
            }

             console.log(row)
        }

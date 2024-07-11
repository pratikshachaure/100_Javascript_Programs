 // 042. Write a program to print following outputs in js

        // 1
        // 12
        // 123
        // 1234

        for (let i = 1; i <= 4; i++) {
            let row=""
            for (let j = 1; j <= i; j++) {
               row+=j; 
            }

             console.log(row)
        }
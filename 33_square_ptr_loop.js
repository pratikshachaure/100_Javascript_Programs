const prompt = require('prompt-sync')();  

for(let i = 1; i <= 6; i++) {
    let row = "";
    for(let j = 1; j <= 6; j++) {
        row += " *";
    }
    console.log(row);
}

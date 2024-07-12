const fs = require('fs')
fs.readFile('95_stack1.js', (err, inputD) => {
   if (err) throw err;
      console.log(inputD.toString());
})
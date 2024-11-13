const fs = require('fs');

const readS = fs.createReadStream("../content/big.txt"); 

let counter = 0;
readS.on('data', (chunk) =>{
    counter++;
    console.log('received: ', chunk);
});

readS.on('end', () => {
    console.log( `Chunks received: # ${counter}`)
});

readS.on('error', (error) => {
    console.log ('Reading file error: ', error)
});
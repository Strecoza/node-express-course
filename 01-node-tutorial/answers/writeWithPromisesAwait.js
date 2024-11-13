const {writeFile, readFile} = require('fs').promises;

//async function writer
const writer = async() => {
    try{
        await writeFile( 'temp.txt' , 'first line\n');
        console.log('first line written');
        await writeFile('temp.txt', 'second line\n', {flag: 'a'});
        console.log('second line written');
    } catch (error) {
        console.log ('Some error: ', error)
    }
}

//async function reader
const reader = async() => {
    try {
        const data = await readFile('temp.txt', 'utf8');
        console.log('We have in file: ');
        console.log(data);
    } catch (error) {
        console.log( 'An error here while reading: ', error);
    }
}

//async function readWrite
const readWrite = async() => {
    await writer();
    await reader();
}

readWrite();
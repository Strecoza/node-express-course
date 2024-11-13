const { writeFile, readFile } = require("fs").promises;  

writeFile('temp.txt', 'Line 1\n') // write line 1  
 .then(() => {  
    console.log('Line 1 written');
     // Return the promise  
    return writeFile('temp.txt', 'Line 2\n', {flag: 'a'});  // write line 2.  
   
 })  
 // write the third line, and follow that with two more .then blocks,  
 .then(() => {
    console.log('Line 2 written');
    return writeFile('temp.txt', 'Line 3\n', {flag: 'a'}); 
 }) 
 .then(() => {
    console.log('Line 3 written');
    return readFile('temp.txt', 'utf8'); 
 }) 
 .then((data) => {
    console.log('In file:');
    console.log(data);
 }) 
 .catch((error) => {  
     console.log("An error occurred: ", error)  
 })  
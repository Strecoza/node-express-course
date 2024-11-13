const {readFileSync, writeFileSync} = require('fs');

console.log('start');

const path = require('path');
const filePath = path.join(__dirname, 'content', 'subfolder', 'fileA.txt')
console.log(filePath);

writeFileSync(filePath, 'Here is the first line.\ ');
writeFileSync(filePath, 'Here is the second line.\n', {flag: 'a'});
writeFileSync(filePath, 'Here is the third line', {flag: 'a'});

const content = readFileSync(filePath, 'utf8');
console.log(content);
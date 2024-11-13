const path = require('path');

console.log(path.sep)

const answersPath = path.join('/content','subfolder', 'text.txt')
console.log(answersPath)

const basic = path.basename(answersPath)
console.log(basic)

const absolute = path.resolve( __dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)